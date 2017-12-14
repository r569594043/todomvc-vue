import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Todo from '@/components/Todo';
import AntdDemo from '@/components/AntdDemo';
import iViewDemo from '@/components/iViewDemo';
import Startup from '@/components/Startup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/antd-demo',
      name: 'AntdDemo',
      component: AntdDemo,
    },
    {
      path: '/iview-demo',
      name: 'iViewDemo',
      component: iViewDemo,
    },
    {
      path: '/startup',
      name: 'Startup',
      component: Startup,
    },
  ],
});
