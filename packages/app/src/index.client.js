import ReactApp from '@lskjs/reactapp/client';
import ready from '@lskjs/utils/polyfill';
import merge from 'lodash/merge';

import configClient from './config/client';

const rootStateConfig = window.__ROOT_STATE__ ? window.__ROOT_STATE__.config : {};

const config = merge({}, configClient, rootStateConfig);

ready();
require('./assets/styles.css');

const main = async () => {
  const app = await ReactApp.create({
    debug: 1,
    config,
    modules: {
      uapp: () => import('./Uapp'),
    },
  });
  global.app = app;
  global.uapp = app.uapp;
  window.onload = () => app.start();
  return app;
};

export default main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('ReactApp error', err);
});
