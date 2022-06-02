import { RouteConfig } from 'vue-router';

export const initialTemplateRoutes: Array<RouteConfig> = [
  {
    path: '',
    name: 'Home',
    component: () => import('./Home/Home.view.vue'),
  },
  {
    path: 'resume',
    name: 'Resume',
    component: () => import('./Resume/Resume.component.vue'),
  }
];
