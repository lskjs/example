import BaseUappModule from '@lskjs/uapp';

import routes from './routes';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef
  window.__CLIENT__ = true;
}

class UappModule extends BaseUappModule {
  async init() {
    await super.init();
    this.__app = this.app;
    this.app = this;
  }

  getRoutes() {
    return {
      ...super.getRoutes(),
      ...routes,
    };
  }

  catchError(fn) {
    return async (...args) => {
      try {
        const res = await fn(...args);
        return res;
      } catch (err) {
        this.onError(err);
        throw err;
      }
    };
  }

  // @autobind
  onError(err) {
    if ((err && err.type === 'cancel') || (err && err.code === 'page.cancel') || err === 'page.cancel') {
      return null;
    }
    return this.toast(err, { defaultType: 'error' });
  }

  toast(err) {
    this.log.error('[toast]', err);
  }

  redirect(...args) {
    if (__DEV__) this.log.trace('Uapp.redirect', ...args);
    if (__CLIENT__) {
      const [link] = args;
      if ((link && link.startsWith('http://')) || link.startsWith('https://')) {
        window.location.href = link;
      } else {
        this.__app.redirect(...args);
      }
    } else if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log('cant history.redirect because it server', ...args);
    }
  }
}

export default UappModule;
