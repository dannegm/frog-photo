import { lazy } from 'react';

const Login = lazy(() => import('@pages/Login'));

export default [
    {
        name: 'Login',
        path: '/',
        Component: Login,
    },
];
