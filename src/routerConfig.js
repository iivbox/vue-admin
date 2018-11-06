import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Form from '@/pages/Form';

const routerConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/notfound',
    component: NotFound
  },
  {
    path: '/form',
    component: Form
  }
];

export default routerConfig;
