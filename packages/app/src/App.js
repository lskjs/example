import BaseServerApp from '@lskjs/server';

import Api from './api';
import Uapp from './Uapp';

class ServerApp extends BaseServerApp {
  getModules() {
    return {
      ...super.getModules(),
      webserver: () => [import('@lskjs/webserver/server'), { Api }],
      reactApp: () => [
        import('@lskjs/reactapp/server'),
        {
          Uapp,
        },
      ],
    };
  }

  healthchecks() {
    return {
      nodejs: () => true,
    };
  }
}

export default ServerApp;
