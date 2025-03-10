const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/Home/index.vue'),
      },
      {
        path: 'collections',
        name: 'Collections',
        component: () => import('src/pages/Collections.vue'),
      },
      {
        path: ':id/categories',
        name: 'Categories',
        component: () => import('src/pages/Categories.vue'),
      },
      {
        path: 'custom-work',
        name: 'CustomWork',
        component: () => import('src/pages/CustomWork.vue'),
      },
      {
        path: 'book-consultation',
        name: 'BookConsultation',
        component: () => import('src/pages/BookConsultation.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('src/pages/About.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('src/pages/Contact.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
