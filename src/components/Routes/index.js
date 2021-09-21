import React from 'react';

const Home = React.lazy(() => import('../../pages/Home'));
const Settings = React.lazy(() => import('../../pages/Settings'));

const routes = [
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/home', name: 'Home', component: Home }
];

export default routes;