// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => (
    <>
        <MainCard title="Welcome!">
            <Typography variant="body2">
                <span role="img" aria-label="block left handed">
                    &#128072;
                </span>
                {'   '}
                Explore more by clicking on Manage
            </Typography>
        </MainCard>
    </>
);

export default HomePage;
