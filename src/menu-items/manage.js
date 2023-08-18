// assets
import { IconAdjustments, IconDashboard, IconNotes, IconChartDots } from '@tabler/icons';

// constant
const icons = {
    IconAdjustments,
    IconNotes,
    IconChartDots,
    IconDashboard
};

// ==============================|| MANAGE MENU ITEMS ||============================== //

const manageSection = {
    id: 'Manage',
    type: 'group',
    children: [
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

export default manageSection;
