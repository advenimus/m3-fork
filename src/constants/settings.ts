import type { SettingsGroups, SettingsItems, SettingsValues } from 'src/types';

// Enum Types
export const RESOLUTIONS = [
  '240p',
  '360p',
  '480p',
  '720p',
  //'1080p'
] as const;

/* eslint-disable perfectionist/sort-objects */
export const settingsGroups: SettingsGroups = {
  app: {
    description: 'applicationConfigurationDescription',
    icon: 'mmm-configuration',
    name: 'applicationConfiguration',
  },
  congregationMeetings: {
    description: 'congregationMeetingsDescription',
    icon: 'mmm-lectern',
    name: 'congregationMeetings',
  },
  mediaRetrievalPlayback: {
    description: 'mediaRetrievalAndPlaybackDescription',
    icon: 'mmm-media-settings',
    name: 'mediaRetrievalAndPlayback',
  },
  integrations: {
    description: 'integrationsDescription',
    icon: 'mmm-integrations',
    name: 'integrations',
  },
  advanced: {
    description: 'advancedDescription',
    icon: 'mmm-advanced-settings',
    name: 'advanced',
  },
};

export const settingsDefinitions: SettingsItems = {
  // App
  localAppLang: {
    group: 'app',
    list: 'appLanguages',
    rules: ['notEmpty'],
    type: 'list',
  },
  darkMode: {
    group: 'app',
    list: 'darkModes',
    rules: ['notEmpty'],
    type: 'list',
  },
  firstDayOfWeek: {
    group: 'app',
    list: 'days',
    type: 'list',
  },
  autoStartAtLogin: {
    group: 'app',
    type: 'toggle',
  },
  // Congregation Meetings
  congregationName: {
    group: 'congregationMeetings',
    rules: ['notEmpty'],
    type: 'text',
  },
  lang: {
    group: 'congregationMeetings',
    list: 'jwLanguages',
    rules: ['notEmpty'],
    type: 'list',
  },
  langFallback: {
    group: 'congregationMeetings',
    list: 'jwLanguages',
    type: 'list',
  },
  mwDay: {
    group: 'congregationMeetings',
    list: 'days',
    rules: ['notEmpty', 'regular'],
    type: 'list',
  },
  mwStartTime: {
    group: 'congregationMeetings',
    options: ['meetingTime'],
    rules: ['notEmpty', 'regular'],
    type: 'time',
  },
  weDay: {
    group: 'congregationMeetings',
    list: 'days',
    rules: ['notEmpty', 'regular'],
    type: 'list',
  },
  weStartTime: {
    group: 'congregationMeetings',
    options: ['meetingTime'],
    rules: ['notEmpty', 'regular'],
    type: 'time',
  },
  coWeek: {
    group: 'congregationMeetings',
    options: ['coTuesdays'],
    type: 'date',
  },
  // Media Retrieval and Playback
  enableMediaDisplayButton: {
    group: 'mediaRetrievalPlayback',
    type: 'toggle',
  },
  enableMusicButton: {
    group: 'mediaRetrievalPlayback',
    subgroup: 'setupWizard.backgroundMusic',
    type: 'toggle',
  },
  autoStartMusic: {
    depends: 'enableMusicButton',
    group: 'mediaRetrievalPlayback',
    subgroup: 'setupWizard.backgroundMusic',
    type: 'toggle',
  },
  enableExtraCache: {
    depends: 'enableMediaDisplayButton',
    group: 'mediaRetrievalPlayback',
    subgroup: 'cache',
    type: 'toggle',
  },
  enableFolderWatcher: {
    depends: 'enableMediaDisplayButton',
    group: 'mediaRetrievalPlayback',
    subgroup: 'folderWatcher',
    type: 'toggle',
  },
  folderToWatch: {
    depends: ['enableFolderWatcher', 'enableMediaDisplayButton'],
    group: 'mediaRetrievalPlayback',
    subgroup: 'folderWatcher',
    type: 'path',
  },

  // Integrations
  obsEnable: {
    actions: ['obsConnect'],
    group: 'integrations',
    subgroup: 'obsStudio',
    type: 'toggle',
  },
  obsPassword: {
    actions: ['obsConnect'],
    depends: 'obsEnable',
    group: 'integrations',
    subgroup: 'obsStudio',
    type: 'text',
  },
  obsPort: {
    actions: ['obsConnect'],
    depends: 'obsEnable',
    group: 'integrations',
    rules: ['portNumber'],
    subgroup: 'obsStudio',
    type: 'text',
  },
  obsCameraScene: {
    depends: ['obsEnable', 'obsPort', 'obsPassword'],
    group: 'integrations',
    list: 'obsAllScenes',
    subgroup: 'obsStudio',
    type: 'list',
  },
  obsMediaScene: {
    depends: ['obsEnable', 'obsPort', 'obsPassword'],
    group: 'integrations',
    list: 'obsAllScenes',
    subgroup: 'obsStudio',
    type: 'list',
  },
  obsImageScene: {
    depends: ['obsEnable', 'obsPort', 'obsPassword', 'obsMediaScene'],
    group: 'integrations',
    list: 'obsAllScenes',
    subgroup: 'obsStudio',
    type: 'list',
  },
  obsQuickToggle: {
    depends: ['obsEnable', 'obsPort', 'obsPassword', 'obsMediaScene'],
    group: 'integrations',
    subgroup: 'obsStudio',
    type: 'toggle',
  },
  // Advanced

  enableKeyboardShortcuts: {
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'toggle',
  },
  shortcutMediaWindow: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  shortcutMediaPrevious: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  shortcutMediaNext: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  shortcutMediaPauseResume: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  shortcutMediaStop: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  shortcutMusic: {
    depends: 'enableKeyboardShortcuts',
    group: 'advanced',
    subgroup: 'keyboardShortcuts',
    type: 'shortcut',
  },
  hideMediaLogo: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    subgroup: 'media-display',
    type: 'toggle',
  },
  maxRes: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    list: 'resolutions',
    rules: ['notEmpty'],
    subgroup: 'media-display',
    type: 'list',
  },
  includePrinted: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    subgroup: 'media-display',
    type: 'toggle',
  },
  excludeFootnotes: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    subgroup: 'media-display',
    type: 'toggle',
  },
  excludeTh: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    subgroup: 'media-display',
    type: 'toggle',
  },
  enableSubtitles: {
    depends: 'enableMediaDisplayButton',
    group: 'advanced',
    subgroup: 'subtitles',
    type: 'toggle',
  },
  langSubtitles: {
    depends: 'enableSubtitles',
    group: 'advanced',
    list: 'jwLanguages',
    subgroup: 'subtitles',
    type: 'list',
  },
  musicVolume: {
    actions: ['setBackgroundMusicVolume'],
    depends: 'enableMusicButton',
    group: 'advanced',
    max: 100,
    min: 1,
    step: 1,
    subgroup: 'setupWizard.backgroundMusic',
    type: 'slider',
  },
  baseUrl: {
    rules: ['notEmpty'],
    group: 'advanced',
    subgroup: 'dangerZone',
    type: 'text',
  },
  disableMediaFetching: {
    group: 'advanced',
    subgroup: 'dangerZone',
    type: 'toggle',
  },
};
/* eslint-enable perfectionist/sort-objects */

export const defaultSettings: SettingsValues = {
  autoStartAtLogin: false,
  autoStartMusic: true,
  baseUrl: 'jw.org',
  congregationName: null,
  coWeek: null,
  darkMode: 'auto',
  disableMediaFetching: false,
  enableExtraCache: false,
  enableFolderWatcher: false,
  enableKeyboardShortcuts: false,
  enableMediaDisplayButton: false,
  enableMusicButton: true,
  enableSubtitles: false,
  excludeFootnotes: false,
  excludeTh: true,
  firstDayOfWeek: 0,
  folderToWatch: '',
  hideMediaLogo: false,
  includePrinted: true,
  lang: 'E',
  langFallback: null,
  langSubtitles: null,
  localAppLang: 'en',
  maxRes: '720p',
  musicVolume: 100,
  mwDay: null,
  mwStartTime: null,
  obsCameraScene: null,
  obsEnable: false,
  obsImageScene: null,
  obsMediaScene: null,
  obsPassword: null,
  obsPort: null,
  obsQuickToggle: false,
  shortcutMediaNext: null,
  shortcutMediaPauseResume: null,
  shortcutMediaPrevious: null,
  shortcutMediaStop: null,
  shortcutMediaWindow: null,
  shortcutMusic: null,
  weDay: null,
  weStartTime: null,
};
