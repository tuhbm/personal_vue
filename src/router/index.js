import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '../components/Home';
import Todo from '../components/Todo/Todo';
import Calculator from '../components/Calculator/Calculator';
import Login from '../components/User/Login';
import SignUp from '../components/User/SignUp';


Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    }
  ]
});


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) {
    next('/');
    router.replace('/login')
  }
  else next()
});


export default router;

