import type { Announcement, JwLanguageResult } from 'src/types';

import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import { errorCatcher } from 'src/helpers/error-catcher';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchRaw = async <T = any>(
  url: string,
  config?: AxiosRequestConfig,
) => {
  return axios<T>(url, config);
};

export const fetch = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<null | T> => {
  try {
    const response = await fetchRaw<T>(url, config);
    return response.data;
  } catch (e) {
    if (!(e instanceof AxiosError) || ![400, 404].includes(e.status ?? 0)) {
      errorCatcher(e);
    }
  }
  return null;
};

export const fetchJwLanguages = async (base?: string) => {
  if (!base) return;
  const url = `https://www.${base}/en/languages/`;
  const result = await fetch<JwLanguageResult>(url);
  return result?.languages;
};

interface YeartextResult {
  content: string;
  exists: boolean;
  jsonUrl: string;
  url: string;
}

export const fetchYeartext = async (wtlocale: string, base?: string) => {
  if (!base) return;
  const url = `https://wol.${base}/wol/finder`;
  const result = await fetch<YeartextResult>(url, {
    params: {
      docid: `110${new Date().getFullYear()}800`,
      format: 'json',
      snip: 'yes',
      wtlocale,
    },
  });

  return result?.content;
};

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  if (!process.env.repository) return [];
  const result = await fetch<Announcement[]>(
    `${process.env.repository?.replace('github', 'raw.githubusercontent')}/refs/heads/master/announcements.json`,
  );
  return result?.filter((a) => !!a.id && !!a.message) || [];
};
