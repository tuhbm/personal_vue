import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Todo from '../components/Todo/Todo';
import Calculator from '../components/Calculator/Calculator';


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