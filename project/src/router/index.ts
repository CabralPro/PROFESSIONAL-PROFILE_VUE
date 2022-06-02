import Vue from 'vue'
import VueRouter, { RouteConfig, RouteRecord } from 'vue-router'
import { initialTemplateRoutes } from '@/views/InitialTemplate/InitialTemplate.routes'

Vue.use(VueRouter)

export let activeRoutes: RouteRecord[] = [];

const routes: Array<RouteConfig> = [
	{
    path: '/',
    name: 'InitialTemplate',
    children: initialTemplateRoutes,
    component: () => import('@/views/InitialTemplate/InitialTemplate.template.vue'),
  },
]

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {

  activeRoutes = [];
  to.matched.forEach((record) => { activeRoutes.push(record); });

  next();
});

export default router
