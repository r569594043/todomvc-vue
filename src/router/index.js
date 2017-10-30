import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Todo from '@/components/Todo';

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
  ],
});
