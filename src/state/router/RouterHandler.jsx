import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Loading from '@components/Loading';

import routes from './routes';

const E404 = lazy(() => import('@pages/E404'));

const RouterHandler = () => (
    <Router>
        <Suspense fallback={<Loading />}>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={`root.${route.name}`}
                        path={route.path}
                        element={<route.Component />}
                    />
                ))}
                <Route path='*' element={<E404 />} />
            </Routes>
        </Suspense>
    </Router>
);
export default RouterHandler;
