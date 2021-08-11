import BaseReactApp from '@lskjs/reactapp/client';
import collectWindowReq from '@lskjs/utils/collectWindowReq';

export default class ReactAppClient extends BaseReactApp {
  async render() {
    if (this.uapp && this.uapp.page && this.uapp.page.exit) {
      await this.uapp.page.exit();
    }
    const req = collectWindowReq();
    let page;
    try {
      page = await this.resolve(req);
    } catch (err) {
      if ((err && err.type === 'cancel') || (err && err.code === 'page.cancel') || err === 'page.cancel') {
        if (__DEV__) console.warn('!!!!!!!!!!!!!!! CSR.canceled !!!!!!!!!!!!!'); // eslint-disable-line no-console
        return;
      }
      this.log.error('ReactAppClient.resolve err (ROUTER ERROR)', err);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error('ReactAppClient.resolve err (ROUTER ERROR)');
      } catch (x) {
        //
      }
      throw err;
    }

    if (page.state.redirect) {
      this.redirect(...page.state.redirect);
      return;
    }

    if (!this.container) {
      this.log.error('!ReactAppClient.container');
    }
    const component = page.render();
    this.ReactDOM.render(component, this.container);
  }
}
