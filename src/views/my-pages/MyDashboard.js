// material-ui
import { Stack, Grid, Button, TextField } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { dashboardData } from 'store/dashboardData';
import DashboardItem from './DashboardItem';
import { useState } from 'react';

// ==============================|| MY DASHBOARD PAGE ||============================== //

const MyDashboard = () => {
    const [searchText, setSearchText] = useState('');
    const [tableData, setTableData] = useState(dashboardData);
    const handleSearch = () => {
        setTableData(dashboardData.filter((row) => row.title.toLowerCase().startsWith(searchText.toLowerCase())));
    };
    return (
        <>
            <MainCard title="Dashboard">
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Stack spacing={2} direction="row">
                            <TextField
                                color="secondary"
                                fullWidth
                                label="Filter"
                                id="fullWidth"
                                margin="normal"
                                focused
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Button color="secondary" size="small" onClick={() => handleSearch()}>
                                Search
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        {tableData.map((row) => (
                            <DashboardItem key={row.title} title={row.title} info={row.info} />
                        ))}
                    </Grid>
                </Grid>
            </MainCard>
            {}
        </>
    );
};

export default MyDashboard;
