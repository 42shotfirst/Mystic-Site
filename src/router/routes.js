
export default [
  { path: '/', component: () => import('pages/index') },
  { path: '/features', component: () => import('pages/features') },
  { path: '/FAQ', component: () => import('pages/FAQ') },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
