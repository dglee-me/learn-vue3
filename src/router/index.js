import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/pages/HomeView.vue';
import AboutView from '@/pages/AboutView.vue';
import PostCreateView from '@/pages/posts/PostCreateView.vue';
import PostDetailView from '@/pages/posts/PostDetailView.vue';
import PostListView from '@/pages/posts/PostListView.vue';
import PostEditView from '@/pages/posts/PostEditView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/post',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/post/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetailView,
  },
  {
    path: '/post/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
