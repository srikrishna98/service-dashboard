import PropTypes from 'prop-types';
// material-ui
import { Grid, Box, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { gridSpacing } from 'store/constant';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { logsData } from 'store/logsData';

// ==============================|| LOGS PAGE ||============================== //

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ serviceName, isSelected, whenClick }) => (
    <Card sx={{ mb: 3, boxShadow: isSelected === true ? 5 : 0 }} onClick={() => whenClick(serviceName)}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'grey.100',
                color: 'grey.800'
            }}
        >
            <Typography variant="h3" component="div">
                {serviceName}
            </Typography>
        </Box>
    </Card>
);

ServiceItem.propTypes = {
    serviceName: PropTypes.string.isRequired
};
const LogsPage = () => {
    const [activeSelection, setActiveSelection] = useState(logsData[0].title);
    return (
        <>
            <MainCard title="Logs">
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} xs={12} md={12}>
                        {logsData.map((log) => (
                            <ServiceItem
                                key={log.title}
                                serviceName={log.title}
                                isSelected={log.title === activeSelection}
                                whenClick={setActiveSelection}
                            />
                        ))}
                    </Grid>
                    <Grid item lg={9} xs={12} md={12}>
                        <SubCard
                            title={
                                <Typography variant="h4" component="div">
                                    {activeSelection} Logs
                                </Typography>
                            }
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: 'block',
                                    p: 1,
                                    m: 1,
                                    bgcolor: '#101010',
                                    color: 'grey.300',
                                    overflow: 'auto',
                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                    height: '400px'
                                }}
                            >
                                {logsData.map((log) => log.title === activeSelection && <code>{log.log}</code>)}
                            </Box>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default LogsPage;
