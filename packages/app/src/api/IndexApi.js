import BaseIndexApi from '@lskjs/server-api/IndexApi';
import TestApi from '@lskjs/server-api/TestApi';

class IndexApi extends BaseIndexApi {
  getRoutes() {
    return {
      ...super.getRoutes(),
      '/test': TestApi,
      '*': this.e404,
    };
  }
}

export default IndexApi;
