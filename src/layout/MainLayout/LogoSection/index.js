import { Link } from 'react-router-dom';
import { IconReportAnalytics } from '@tabler/icons';
// material-ui
import { ButtonBase } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
// project imports
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        {/* <IconReportAnalytics /> */}
        <MuiTypography variant="h1"> Srikrishna</MuiTypography>
    </ButtonBase>
);

export default LogoSection;
