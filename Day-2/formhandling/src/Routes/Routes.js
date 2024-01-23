import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Signup.vue'
const routes = [
  {
    path: "/signup",
    name: "Signup",
    component:Login
  },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;