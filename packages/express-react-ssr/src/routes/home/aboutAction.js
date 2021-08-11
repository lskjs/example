import importElement from '../../utils/importElement';

async function homeAction({ page }) {
  return page
    .meta({
      title: 'Главная',
      url: '',
    })
    .meta({
      title: 'О нас',
      url: '/about',
    })
    .component(import(/* webpackChunkName: "HomeLayout" */ '../../layouts/HomeLayout'), {
      children: await page.wait(
        importElement(import(/* webpackChunkName: "AboutPage" */ '../../pages/home/AboutPage')),
      ),
    });
}

export default homeAction;
