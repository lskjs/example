import asyncAction from '@lskjs/utils/asyncAction';

export default {
  children: [
    {
      path: '',
      action: asyncAction(() => import(/* webpackChunkName: "homeAction" */ './homeAction')),
    },
    {
      path: '/about',
      action: asyncAction(() => import(/* webpackChunkName: "aboutAction" */ './aboutAction')),
    },
  ],
};
