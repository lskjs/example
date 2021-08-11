import BaseRootApi from '@lskjs/server-api/RootApi';

import IndexApi from './IndexApi';

class RootApi extends BaseRootApi {
  getRoutes() {
    return {
      ...super.getRoutes(),
      '/': this.index.bind(this),
      '/api': IndexApi,
      '*': this.e404,
    };
  }

  index() {
    return {
      hello: 'world',
      message: 'Пример этого кода можно найти в src/api/RootApi.js',
    };
  }
}

export default RootApi;
