<template>
  <q-menu
    ref="musicPopup"
    v-model="open"
    :offset="[0, 8]"
    anchor="top middle"
    no-parent-event
    self="bottom middle"
    transition-hide="jump-down"
    transition-show="jump-up"
  >
    <q-card flat>
      <q-card-section class="q-px-none">
        <div class="card-title q-px-md">
          {{ $t('setupWizard.backgroundMusic') }}
        </div>
        <q-slide-transition>
          <div v-if="musicPlaying">
            <div>
              <p class="card-section-title text-dark-grey q-px-md">
                {{ $t('current-song') }}
              </p>
              <div class="row q-my-sm q-px-md">
                <div class="col text-weight-medium">
                  {{ musicPlayingTitle }}
                </div>
                <div class="col-shrink text-grey">
                  {{ currentSongRemainingTime }}
                </div>
              </div>
              <q-separator class="bg-accent-200 q-mb-md" />
              <div>
                <p class="card-section-title text-dark-grey q-px-md">
                  {{ $t('upcoming-songs') }}
                </p>
                <q-scroll-area
                  :bar-style="barStyle"
                  :thumb-style="thumbStyle"
                  style="height: 100px; max-width: 100%"
                >
                  <template v-for="(song, i) in songList" :key="i">
                    <div class="row q-my-sm q-px-md">
                      <div class="col text-weight-medium">
                        {{ song.title }}
                      </div>
                      <div class="col-shrink text-grey">
                        {{ formatTime(song.duration ?? 0) }}
                      </div>
                    </div>
                  </template>
                </q-scroll-area>
              </div>
            </div>
            <q-separator class="bg-accent-200 q-mb-md" />
          </div>
        </q-slide-transition>
        <div class="row items-center q-px-md">
          <div class="col">
            <div class="row text-subtitle1 text-weight-medium">
              {{
                musicPlaying || musicStarting
                  ? musicRemainingTime.includes('music.')
                    ? $t(musicRemainingTime)
                    : musicRemainingTime
                  : $t('not-playing')
              }}
            </div>
            <div
              v-if="
                musicPlaying &&
                !musicStopping &&
                meetingDay &&
                timeRemainingBeforeMusicStop > 0
              "
              class="row text-dark-grey"
            >
              {{ $t('until-meeting-starts') }}
            </div>
          </div>
          <div class="col-grow">
            <q-btn
              v-if="!musicPlaying"
              :disable="mediaPlaying || musicStarting"
              class="full-width"
              color="primary"
              unelevated
              @click="playMusic"
              >{{ $t('play-music') }}</q-btn
            >
            <q-btn
              v-else
              :disable="musicStopping"
              class="full-width"
              color="primary"
              unelevated
              @click="stopMusic"
              >{{ $t('stop-music') }}</q-btn
            >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-menu>
  <audio
    ref="musicPlayer"
    style="display: none"
    @ended="musicEnded"
    @timeupdate="updateRemainingTime"
  />
</template>

<script setup lang="ts">
import type { SongItem } from 'src/types';

import {
  useBroadcastChannel,
  useEventListener,
  watchImmediate,
  whenever,
} from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { date, type QMenu } from 'quasar';
import { useScrollbar } from 'src/composables/useScrollbar';
import { remainingTimeBeforeMeetingStart } from 'src/helpers/date';
import { errorCatcher } from 'src/helpers/error-catcher';
import {
  getFileUrl,
  getMetadataFromMediaPath,
  getPublicationDirectoryContents,
} from 'src/helpers/fs';
import { downloadBackgroundMusic } from 'src/helpers/jw-media';
import { formatTime, isVideo } from 'src/helpers/mediaPlayback';
import { useCurrentStateStore } from 'src/stores/current-state';
import { useJwStore } from 'src/stores/jw';
import { ref, useTemplateRef, watch } from 'vue';

const open = defineModel<boolean>({ default: false });

const { getDateDiff } = date;

const { fileUrlToPath, parseMediaFile, path } = window.electronApi;

const { barStyle, thumbStyle } = useScrollbar();

const currentState = useCurrentStateStore();
const {
  currentCongregation,
  currentSettings,
  currentSongRemainingTime,
  mediaPlaying,
  mediaPlayingAction,
  mediaPlayingUrl,
  meetingDay,
  musicPlaying,
  musicRemainingTime,
  musicStarting,
  musicStopping,
  selectedDate,
  selectedDateObject,
  timeRemainingBeforeMusicStop,
} = storeToRefs(currentState);

const jwStore = useJwStore();
const { lookupPeriod } = storeToRefs(jwStore);

const musicPlayer = useTemplateRef('musicPlayer');
const musicPlayerSource = ref<HTMLSourceElement>(
  document.createElement('source'),
);

const musicPlayingTitle = ref('');
const musicStoppedAutomatically = ref(false);
const songList = ref<SongItem[]>([]);

const muteBackgroundMusic = () => fadeToVolumeLevel(0.001, 1);
const unmuteBackgroundMusic = () =>
  fadeToVolumeLevel((currentSettings?.value?.musicVolume ?? 100) / 100, 1);

const toggleMusicListener = () => {
  try {
    if (!currentSettings.value?.enableMusicButton) return;
    if (musicPlaying.value) {
      stopMusic();
    } else {
      playMusic();
    }
  } catch (error) {
    errorCatcher(error);
  }
};

const musicPopup = useTemplateRef<QMenu>('musicPopup');

async function playMusic() {
  try {
    if (
      !currentSettings.value?.enableMusicButton ||
      musicPlaying.value ||
      !musicPlayer.value
    ) {
      return;
    }

    musicStarting.value = true;
    downloadBackgroundMusic();
    songList.value = [];
    musicPlayer.value.appendChild(musicPlayerSource.value);
    musicPlayer.value.style.display = 'none';
    musicPlayer.value.volume = 0;
    const { duration, nextSongUrl, secsFromEnd } = await getNextSong();
    if (!nextSongUrl) return;
    musicPlayerSource.value.src = nextSongUrl;
    musicPlayer.value?.load();
    const startTime = duration ? duration - secsFromEnd : 0;
    musicPlayer.value.currentTime = startTime;
    musicPlayer.value
      .play()
      .then(() => {
        musicPlaying.value = true;
        fadeToVolumeLevel((currentSettings.value?.musicVolume ?? 100) / 100, 1);
        if (musicPopup.value) {
          const intervalId = setInterval(() => {
            if (musicPopup.value) musicPopup.value.updatePosition();
          }, 10);
          setTimeout(() => {
            clearInterval(intervalId);
          }, 2000);
        }
      })
      .catch((error: Error) => {
        if (
          !(
            error.message.includes('removed from the document') ||
            error.message.includes('new load request') ||
            error.message.includes('interrupted by a call to pause')
          )
        )
          errorCatcher(error);
      })
      .finally(() => {
        musicStarting.value = false;
      });
  } catch (error) {
    errorCatcher(error);
  } finally {
    musicStarting.value = false;
  }
}

function stopMusic() {
  try {
    if (!musicPlayer.value || musicPlayer.value.paused) return;
    musicStopping.value = true;
    fadeToVolumeLevel(0, 5);
  } catch (error) {
    errorCatcher(error);
  }
}

const musicEnded = async () => {
  if (!musicPlayer.value || !musicPlayerSource.value || musicStopping.value) {
    return;
  }

  const { nextSongUrl } = await getNextSong();
  if (!nextSongUrl) return;
  musicPlayerSource.value.src = nextSongUrl;
  musicPlayer.value?.load();
  musicPlayer.value.play().catch((error: Error) => {
    if (
      !(
        error.message.includes('removed from the document') ||
        error.message.includes('new load request') ||
        error.message.includes('interrupted by a call to pause')
      )
    ) {
      errorCatcher(error);
    }
  });
};

const updateRemainingTime = () => {
  try {
    if (!musicPlayer.value) return;
    const remainingTime = Math.floor(
      musicPlayer.value.duration - musicPlayer.value.currentTime,
    );
    currentSongRemainingTime.value = formatTime(remainingTime);
    const timeBeforeMeeting = remainingTimeBeforeMeetingStart();
    if (timeBeforeMeeting > 0 && !musicStoppedAutomatically.value) {
      timeRemainingBeforeMusicStop.value = timeBeforeMeeting - 60;
      if (timeRemainingBeforeMusicStop.value <= 0 && !musicStopping.value) {
        stopMusic();
        musicStoppedAutomatically.value = true;
      }
    }
  } catch (error) {
    errorCatcher(error);
  }
};

const getNextSong = async () => {
  try {
    let musicDurationSoFar = 0;
    const timeBeforeMeetingStart = remainingTimeBeforeMeetingStart() - 60;
    let secsFromEnd = 0;
    if (!songList.value.length) {
      let attempts = 0;
      while (songList.value.length < 10 && attempts < 10) {
        songList.value = (
          await getPublicationDirectoryContents(
            { langwritten: currentSettings.value?.lang || 'E', pub: 'sjjm' },
            'mp3',
          )
        ).sort(() => Math.random() - 0.5);
        if (songList.value.length >= 10) {
          break;
        }
        attempts++;
        await new Promise((resolve) => {
          setTimeout(resolve, 5000);
        });
      }
      for (const queuedSong of songList.value) {
        const metadata = await getMetadataFromMediaPath(queuedSong.path);
        queuedSong.duration = metadata?.format?.duration ?? 0;
        queuedSong.title =
          metadata?.common.title ?? path.basename(queuedSong.path);
      }
      try {
        const selectedDayMedia =
          lookupPeriod.value[currentCongregation.value]?.find(
            (d) => getDateDiff(selectedDate.value, d.date, 'days') === 0,
          )?.dynamicMedia ?? [];
        const regex = /(_r\d{3,4}P)?\.\w+$/;
        const selectedDaySongs: SongItem[] = selectedDayMedia
          .map((d) =>
            path.basename(fileUrlToPath(d.fileUrl.replace(regex, ''))),
          )
          .map((basename) => {
            const index = songList.value.findIndex(
              (s) => path.basename(s.path.replace(regex, '')) === basename,
            );
            if (index !== -1) {
              return songList.value.splice(index, 1)[0];
            }
            return null;
          })
          .filter((song) => song !== null);
        if (timeBeforeMeetingStart > 0) {
          let customSongList: SongItem[] = [];
          if (selectedDaySongs.length) {
            songList.value.push(...selectedDaySongs);
            songList.value.reverse();
          }
          if (songList.value.length) {
            while (musicDurationSoFar < timeBeforeMeetingStart) {
              const queuedSong = songList.value.shift();
              if (!queuedSong) {
                customSongList = songList.value;
                break;
              }
              songList.value.push(queuedSong);
              customSongList.unshift(queuedSong);
              secsFromEnd = timeBeforeMeetingStart - musicDurationSoFar;
              musicDurationSoFar += queuedSong.duration ?? 0;
            }
            songList.value = customSongList;
          }
        }
      } catch (error) {
        errorCatcher(error);
      }
    }
    if (!songList.value.length)
      return {
        nextSongUrl: '',
        secsFromEnd: 0,
      };
    let nextSong = songList.value.shift();
    if (!nextSong) {
      return {
        nextSongUrl: '',
        secsFromEnd: 0,
      };
    }
    songList.value.push(nextSong);
    try {
      const metadata = await parseMediaFile(nextSong.path);
      musicPlayingTitle.value =
        metadata.common.title ?? path.basename(nextSong.path);
    } catch (error) {
      errorCatcher(error);
      musicPlayingTitle.value = path.basename(nextSong.path) ?? '';
    }
    return {
      duration: nextSong.duration,
      nextSongUrl: getFileUrl(nextSong.path),
      secsFromEnd,
    };
  } catch (error) {
    errorCatcher(error);
    return {
      nextSongUrl: '',
      secsFromEnd: 0,
    };
  }
};

const setBackgroundMusicVolume = (volume: number) => {
  try {
    if (!musicPlayer.value || !Number.isInteger(volume) || volume < 0) return;
    musicPlayer.value.volume = Math.min(Math.max(volume / 100, 0), 1);
  } catch (error) {
    errorCatcher(error);
  }
};

const fadeToVolumeLevel = (targetVolume: number, fadeOutSeconds: number) => {
  if (!musicPlayer.value) return;
  targetVolume = Math.min(Math.max(targetVolume, 0), 1);
  try {
    const initialVolume = Math.min(musicPlayer.value.volume, 1);
    const volumeChange = targetVolume - initialVolume;
    const startTime = performance.now();

    // eslint-disable-next-line no-inner-declarations
    function updateVolume(currentTime: number) {
      try {
        if (!musicPlayer.value) return;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / fadeOutSeconds / 1000, 1);
        musicPlayer.value.volume = Math.min(
          Math.max(initialVolume + volumeChange * progress, 0),
          1,
        );

        if (progress < 1) {
          requestAnimationFrame(updateVolume);
        } else {
          if (musicPlayer.value.volume === 0) {
            musicPlayer.value.pause();
            if (musicPopup.value) {
              const intervalId = setInterval(() => {
                if (musicPopup.value) musicPopup.value.updatePosition();
              }, 10);
              setTimeout(() => {
                clearInterval(intervalId);
              }, 2000);
            }
            musicPlaying.value = false;
            musicStopping.value = false;
          }
        }
      } catch (error) {
        errorCatcher(error);
        if (!musicPlayer.value) return;
        musicPlayer.value.volume = targetVolume;
      }
    }
    requestAnimationFrame(updateVolume);
  } catch (error) {
    errorCatcher(error);
    // musicPlaying.value = musicPlayer.value.volume > 0;
    // musicStopping.value = musicPlayer.value.volume === 0;
  }
};

useEventListener(window, 'toggleMusic', toggleMusicListener);
const { data: volumeData } = useBroadcastChannel<number, number>({
  name: 'volume-setter',
});

whenever(
  () => volumeData.value,
  (val) => {
    setBackgroundMusicVolume(val);
  },
);

watchImmediate(
  () => [
    selectedDateObject.value?.today,
    selectedDateObject.value?.meeting,
    musicPlayer.value,
  ],
  ([newToday, newMeeting]) => {
    try {
      meetingDay.value = !!newToday && !!newMeeting;
      const timeBeforeMeetingStart = remainingTimeBeforeMeetingStart();
      if (
        currentSettings.value?.enableMusicButton && // background music feature is enabled
        currentSettings.value?.autoStartMusic && // auto-start music is enabled
        meetingDay.value && // today is a meeting day
        timeBeforeMeetingStart > 90 && // meeting is starting in at least 90 seconds
        timeBeforeMeetingStart < 60 * 60 * 2 // meeting is starting in less than 2 hours
      ) {
        playMusic();
      }
    } catch (error) {
      errorCatcher(error);
    }
  },
);

watch(
  () => [currentSettings.value?.enableMusicButton, currentCongregation.value],
  ([newMusicButtonEnabled, newCongregation], [, oldCongregation]) => {
    if (
      !newMusicButtonEnabled ||
      !newCongregation ||
      oldCongregation !== newCongregation
    ) {
      stopMusic();
    }
    musicStoppedAutomatically.value = false;
  },
);

watch(
  () => [mediaPlayingAction.value, mediaPlayingUrl.value],
  ([newAction, newUrl]) => {
    if (newUrl && isVideo(newUrl) && newAction !== 'pause') {
      muteBackgroundMusic();
    } else {
      unmuteBackgroundMusic();
    }
  },
);
</script>
