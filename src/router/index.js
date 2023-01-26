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
    path: '/maison/:lenom',
    name: 'Maison',
    component: HomeView
  },
  {
    path: '/maison/chaturl',
    name: 'Chat',
    component: ChatView
  },
  {
    path: '/maison/jeuurl',
    name: 'Jeu',
    component: JeuView
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
