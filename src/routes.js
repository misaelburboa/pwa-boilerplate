import React from 'react';

const About = React.lazy(() => import('./containers/About'));
const Home = React.lazy(() => import('./containers/Home'));
const Testing = React.lazy(() => import('./containers/Testing'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/home', name: 'About', component: Home },
    { path: '/testing/:asd', name: 'Testing', component: Testing }
];

export default routes;
