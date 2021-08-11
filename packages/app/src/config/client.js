import about from './about';

export default {
  url: 'http://localhost:3000',
  storage: {
    prefix: about.code,
  },
  log: {
    level: __DEV__ ? 'debug' : __STAGE__ === 'production' ? 'error' : 'warn', // eslint-disable-line no-nested-ternary
  },
  apiq: {
    baseURL: __SERVER__ || __DEV__ ? 'http://localhost:8080' : null,
  },
  about,
};
