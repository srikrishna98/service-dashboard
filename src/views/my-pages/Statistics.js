import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from 'views/dashboard/Default/EarningCard';
import PopularCard from 'views/dashboard/Default/PopularCard';
import TotalOrderLineChartCard from 'views/dashboard/Default/TotalOrderLineChartCard';
import TotalGrowthBarChart from 'views/dashboard/Default/TotalGrowthBarChart';

// ==============================|| SAMPLE PAGE ||============================== //

const StatisticsPage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            <MainCard title="Statistics Page">
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6}>
                        <EarningCard isLoading={false} />
                    </Grid>
                    <Grid item lg={6}>
                        <TotalOrderLineChartCard isLoading={isLoading} monthValue={100} yearValue={2324} />
                    </Grid>

                    <Grid item lg={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default StatisticsPage;
