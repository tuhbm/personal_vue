import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Todo from '../components/Todo/Todo';
import Calculator from '../components/Calculator/Calculator';
import Login from '../components/User/Login';
import SignUp from '../components/User/SignUp';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
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
})