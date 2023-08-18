import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

// ==============================|| CUSTOM SUB CARD ||============================== //

const ClickableCard = forwardRef(
    ({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
        const theme = useTheme();
        const [isOpened, setIsOpened] = useState(false);
        return (
            <Card
                ref={ref}
                sx={{
                    border: '1px solid',
                    borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 15px rgb(32 40 45 / 8%)'
                    },
                    ...sx
                }}
                {...others}
            >
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader
                        sx={{ p: 2.5 }}
                        title={
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item xs={5} lg={5}>
                                    <Typography variant="h5" align="center">
                                        {title}
                                    </Typography>
                                </Grid>
                                {others.info.map((information) => (
                                    <Grid key={information} item xs lg={2}>
                                        <Typography variant="h5" align="center">
                                            {information}
                                        </Typography>
                                    </Grid>
                                ))}
                                <Grid item xs lg align="center">
                                    {!isOpened && <IconChevronDown />}
                                    {isOpened && <IconChevronUp />}
                                </Grid>
                            </Grid>
                        }
                        action={secondary}
                        onClick={() => setIsOpened(!isOpened)}
                    />
                )}
                {darkTitle && title && (
                    <CardHeader
                        sx={{ p: 2.5 }}
                        title={<Typography variant="h4">{title}</Typography>}
                        action={secondary}
                        onClick={() => setIsOpened(!isOpened)}
                        subheader={<Typography>Hello there</Typography>}
                    />
                )}

                {/* content & header divider */}
                {isOpened && title && (
                    <Divider
                        sx={{
                            opacity: 1,
                            borderColor: theme.palette.primary.light
                        }}
                    />
                )}

                {/* card content */}
                {isOpened && content && (
                    <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
                        {children}
                    </CardContent>
                )}
                {!isOpened && !content && children}
            </Card>
        );
    }
);

ClickableCard.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

ClickableCard.defaultProps = {
    content: true
};

export default ClickableCard;
