import { config } from '@/src/config/config';

export const get = async (url: string) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: config.liveLinkCredentials,
      },
    });
    const resJSON = await res.json();
    return resJSON;
  } catch (error) {
    console.error('apiFetch get error', error);
  }
};

export const post = async (url: string, body: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: config.liveLinkCredentials,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const resJSON = await res.json();

    return resJSON;
  } catch (error) {
    console.error('apiFetch post error', error);
  }
};
