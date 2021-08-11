import ready from '@lskjs/utils/polyfill';

import App from './App';
import config from './config/server';

ready();

export default App.start({ config })
  .then((app) => {
    global.app = app;
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  });
