import { config } from '../../config/config';

export const apiFetch = async (url?: string) => {
  const response = await fetch(`${url}`, {
    headers: {
      Authorization: config.liveLinkCredentials,
    },
  });

  const resJSON = await response.json();

  return resJSON;
};
