import {createRouter, createWebHashHistory} from 'vue-router';
import {loadLayoutMiddleware} from '/@/router/middleware/loadLayout.middleware';
import {RouteNamesEnum} from '/@/router/router.types';
import {AppLayoutsEnum} from '/@/layouts/layouts.types';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import('/@/pages/HomePage.vue'),
    },
    {
      path: '/settings',
      name: RouteNamesEnum.settings,
      component: () => import('/@/pages/SettingsPage.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      meta: {
        layout: AppLayoutsEnum.default,
      },
      path: '/parsers',
      children: [
        {
          path: 'vk',
          name: RouteNamesEnum.parserVk,
          component: () => import('/@/pages/parsers/VkParserPage.vue'),
        },
        {
          path: 'inst',
          name: RouteNamesEnum.parserInst,
          component: () => import('/@/pages/parsers/VkParserPage.vue'),
        },
        {
          path: 'twogis',
          name: RouteNamesEnum.parserTwogis,
          component: () => import('/@/pages/parsers/VkParserPage.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
