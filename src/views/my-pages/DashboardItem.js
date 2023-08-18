import { Grid } from '@mui/material';
import ClickableCard from 'ui-component/cards/ClickableCard';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';

// eslint-disable-next-line react/prop-types
const DashboardItem = ({ title, info }) => (
    <Grid container>
        <Grid item lg={12} xs={12} sm={12}>
            <ClickableCard title={title} info={info}>
                <Grid container direction="row" spacing={2}>
                    <Grid item lg={5}>
                        <TotalIncomeDarkCard isLoading={false} callsPerDay={2000} />
                    </Grid>
                    <Grid item lg={2}>
                        <TotalIncomeLightCard savings={10} isLoading={false} />
                    </Grid>
                    <Grid item lg={2}>
                        <TotalIncomeLightCard savings={12} isLoading={false} />
                    </Grid>
                    <Grid item lg={2}>
                        <TotalIncomeLightCard savings={11} isLoading={false} />
                    </Grid>
                </Grid>
            </ClickableCard>
        </Grid>
    </Grid>
);

export default DashboardItem;
