/* eslint-disable global-require */
import Err from '@lskjs/utils/Err';

export default {
  path: '',
  async action({ next, page }) {
    return page.next(next).catch((err) => {
      if (err && !['page.cancel'].includes(err.code)) {
        if ((err.message || '').includes('Loading chunk')) {
          window.location.reload(true);
        }
        let status = 500;
        const errorCodes = ['404', '500', '505', '403', '502', '401'];
        if (errorCodes.includes(String(err.code))) status = Number(err.code);
        if (errorCodes.includes(String(err.message))) status = Number(err.message);
        if (typeof err.code === 'string' && String(err.code || '').startsWith('E_')) {
          status = Number(err.code.split('E_')[1]);
        }

        return page
          .setState({ status })
          .component(import(/* webpackChunkName: "ErrorLayout" */ '../layouts/ErrorLayout'), { err });
      }
      throw new Err('E_404', err);
    });
  },
  children: [
    {
      path: '',
      ...require('./home').default,
    },
    {
      path: '(.*)',
      action({ path }) {
        const err = {
          status: 404,
          message: `Not found path ${path}`,
          path,
        };
        throw new Err('E_404', err);
      },
    },
  ],
};
