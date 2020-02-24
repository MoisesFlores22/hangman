import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import NewGame from '@/pages/NewGame';
import EndGame from '@/pages/EndGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new-game/:level',
      name: 'New Game',
      component: NewGame,
    },
    {
      path: '/end-game/:result',
      name: 'End Game',
      component: EndGame,
    },
  ],
});
