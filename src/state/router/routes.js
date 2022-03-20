import { lazy } from 'react';

const Login = lazy(() => import('@pages/Login'));
const Home = lazy(() => import('@pages/Home'));
const Search = lazy(() => import('@pages/Search'));

export default [
    {
        name: 'Login',
        path: '/',
        Component: Login,
    },
    {
        name: 'Home',
        path: '/home',
        Component: Home,
    },
    {
        name: 'Search',
        path: '/search',
        Component: Search,
    },
];
