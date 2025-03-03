import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/pages/HomeView.vue';
import AboutView from '@/pages/AboutView.vue';
import PostCreateView from '@/pages/posts/PostCreateView.vue';
import PostDetailView from '@/pages/posts/PostDetailView.vue';
import PostListView from '@/pages/posts/PostListView.vue';
import PostEditView from '@/pages/posts/PostEditView.vue';
import NotFoundView from '@/pages/NotFoundView.vue';
import NestedView from '@/pages/nested/NestedView.vue';
import NestedOneView from '@/pages/nested/NestedOneView.vue';
import NestedTwoView from '@/pages/nested/NestedTwoView.vue';
import NestedHomeView from '@/pages/nested/NestedHomeView.vue';

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
    props: true,
  },
  {
    path: '/post/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
    props: true,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
