/* eslint-disable global-require */
import config from '@lskjs/config';
import webserver from '@lskjs/webserver/config';

import client from './client';

export default config({
  debug: 1,
  url: 'http://localhost:3000',
  db: {
    debug: __DEV__,
  },
  log: {
    debug: 1,
    level: __DEV__ ? 'trace' : 'warn',
  },
  webserver: {
    ...webserver,
    port: process.env.PORT || 8080,
    public: `${__dirname}/../../public`,
    storage: `${__dirname}/../../storage`,
  },
  reactApp: {
    ssr: 'nodeStream,emotion',
  },
  client,
});
