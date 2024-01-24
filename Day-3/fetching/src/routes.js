import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home'

const routes = [
    {
        path: '/',
        name: "Home",
        component:Home
    }
];

const route = createRouter({
    history: createWebHistory(),
    routes
});

export default route