import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home'));

export default [
    {
        name: 'Home',
        path: '/',
        Component: Home,
    },
];
