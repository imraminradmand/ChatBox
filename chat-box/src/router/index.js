import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { chatAuth } from '../firebase/config'

// auth gaurd
const requireAuth =(to, from, next) => {
  let user = chatAuth.currentUser
  console.log('Current authd user is: ', user)

  if(!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) =>{
  let user = chatAuth.currentUser

  if(user) {
    next({ name: 'chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
