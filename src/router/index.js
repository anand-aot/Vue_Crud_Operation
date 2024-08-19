import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import UserCreate from '../components/UserCreate.vue';
import UserUpdate from '../components/UserUpdate.vue';

const routes = [
  { path: '/', component: UserList, meta: { displayCreate: true } },
  { path: '/create', component: UserCreate },
  { path: '/update/:id', component: UserUpdate },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
