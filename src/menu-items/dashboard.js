// assets
import { IconDashboard, IconHome, IconAdjustments, IconNotes, IconChartDots } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHome, IconAdjustments, IconNotes, IconChartDots };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Welcome',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'Manage-collapse',
            title: 'Manage',
            type: 'collapse',
            icon: icons.IconAdjustments,
            children: [
                {
                    id: 'my-dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/myDashboard',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },
                {
                    id: 'my-logs',
                    title: 'Logs',
                    type: 'item',
                    url: '/logs',
                    icon: icons.IconNotes,
                    breadcrumbs: false
                },
                {
                    id: 'my-statistics',
                    title: 'Statistics',
                    type: 'item',
                    url: '/statistics',
                    icon: icons.IconChartDots,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default dashboard;
