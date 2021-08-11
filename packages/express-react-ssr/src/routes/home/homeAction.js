import importElement from '../../utils/importElement';

async function homeAction({ page }) {
  return page
    .meta({
      title: 'Главная',
      url: '',
    })
    .component(import(/* webpackChunkName: "HomeLayout" */ '../../layouts/HomeLayout'), {
      children: await page.wait(importElement(import(/* webpackChunkName: "HomePage" */ '../../pages/home/HomePage'))),
    });
}

export default homeAction;
