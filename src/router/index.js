import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView.vue'
import JeuView from '../views/JeuView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/:lenom/maison',
    name: 'Maison',
    component: HomeView
  },
  {
    path: '/:lenom/chat',
    name: 'Chat',
    component: ChatView
  },
  {
    path: '/:lenom/jeu',
    name: 'Jeu',
    component: JeuView
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
