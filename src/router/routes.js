const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Home/index.vue'),
      },
      {
        path: 'collections',
        component: () => import('src/pages/Collections.vue'),
      },
      {
        path: 'custom-work',
        component: () => import('src/pages/CustomWork.vue'),
      },
      {
        path: 'book-consultation',
        component: () => import('src/pages/BookConsultation.vue'),
      },
      {
        path: 'about',
        component: () => import('src/pages/About.vue'),
      },
      {
        path: 'contact',
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
