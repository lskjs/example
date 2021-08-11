import BaseServerApp from '@lskjs/server';

import Api from './api';

class ServerApp extends BaseServerApp {
  getModules() {
    return {
      ...super.getModules(),
      webserver: () => [import('@lskjs/webserver/server'), { Api }],
    };
  }

  healthchecks() {
    return {
      nodejs: () => true,
    };
  }
}

export default ServerApp;
