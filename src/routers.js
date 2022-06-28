import HomePage from './components/HomePage'
import LogIn from './components/LogIn.vue'
import WebDetails from './components/WebDetails.vue'
import PostAdd from './components/PostAdd.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name:'WebDetails',
        component:WebDetails,
        path:'/webdetails/:id'
    },
    {
        name:'PostAdd',
        component:PostAdd,
        path:'/PostAdd'

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;