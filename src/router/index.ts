import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Discover from '../views/Discover.vue';
import Search from '../views/Search.vue';
import Library from '../views/Library.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
