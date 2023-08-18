import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// my pages
const HomePage = Loadable(lazy(() => import('views/my-pages/home')));
const BillingPage = Loadable(lazy(() => import('views/my-pages/billing')));
const LogsPage = Loadable(lazy(() => import('views/my-pages/Logs')));
const MyDashboardPage = Loadable(lazy(() => import('views/my-pages/MyDashboard')));
const SettingsPage = Loadable(lazy(() => import('views/my-pages/settings')));
const StatisticsPage = Loadable(lazy(() => import('views/my-pages/Statistics')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/billing',
            element: <BillingPage />
        },
        {
            path: '/logs',
            element: <LogsPage />
        },
        {
            path: '/myDashboard',
            element: <MyDashboardPage />
        },
        {
            path: '/settings',
            element: <SettingsPage />
        },
        {
            path: '/statistics',
            element: <StatisticsPage />
        }
    ]
};

export default MainRoutes;
