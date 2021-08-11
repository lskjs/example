import BaseIndexApi from '@lskjs/server-api/IndexApi';
import TestApi from '@lskjs/server-api/TestApi';

class IndexApi extends BaseIndexApi {
  getRoutes() {
    return {
      ...super.getRoutes(),
      '': this.index.bind(this),
      '/test': TestApi,
      '*': this.e404,
    };
  }

  index() {
    return {
      message: 'Код этого запроса можно найти в src/api/IndexApi.js',
    };
  }
}

export default IndexApi;
