import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import DockerMenu from './DockerMenu.js';

function AppCard({ appObj, dockerMode }) {
    return (
        <>
            {
                appObj.map((app) => (
                    <Grid item key={app.url} xs={12} sm={6} md={4} lg={3}>
                        <Card elevation={3}>
                            <CardActionArea>
                                <Link href={app.url} target="_blank" underline="none" color="inherit">
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={app.image ? app.image : "appLogo.png"}
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {app.title}
                                        </Typography>
                                    </CardContent>
                                </ Link>
                            </CardActionArea>
                            <CardContent>
                                <DockerMenu containerName={app.containerName} dockerMode={dockerMode} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </>
    );
}

export default AppCard;