// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://www.linkedin.com/in/srikrishna-b" target="_blank" underline="hover">
            Srikrishna Balasubramanian
        </Typography>
        <Typography variant="subtitle2" component={Link} href="mailto:srikrish@usc.edu" target="_blank" underline="hover">
            srikrish@usc.edu
        </Typography>
    </Stack>
);

export default AuthFooter;
