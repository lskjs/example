import BaseRootApi from '@lskjs/server-api/RootApi';

import IndexApi from './IndexApi';

class RootApi extends BaseRootApi {
  getRoutes() {
    return {
      ...super.getRoutes(),
      '/api': IndexApi,
      '/assets/*': this.e404,
      '*.css': this.e404,
      '*.js': this.e404,
      '*.map': this.e404,
      '*': this.index.bind(this),
    };
  }

  async index(...args) {
    if (this.app.hasModule('reactApp')) {
      const reactApp = await this.app.module('reactApp');
      return reactApp.render(...args);
    }
    return this.e404(...args);
  }
}

export default RootApi;
