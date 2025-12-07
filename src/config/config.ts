import { encode } from 'base-64';

export const config = {
  siteUrl: process.env.BASE_URL,
  wcCredentials: process.env.WC_CREDENTIALS,
  liveLinkCredentials: `Basic ${encode('discussion:breezy')}`,
};
