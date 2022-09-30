import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main";
import DescriptionCard from "@/views/Card/DescriptionCard/DescriptionCard";

const routes = [
  {path: '/', component: Main},
  {path: '/card/:id', component: DescriptionCard}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
