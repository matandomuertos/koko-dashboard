import { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import yaml from 'js-yaml';
import AppCard from './AppCard.js';

function AppsBox({ dockerMode }) {
    const [WebCategories, setWebCategories] = useState([]);

    useEffect(() => {
        fetchUrls();
    }, []);

    async function fetchUrls() {
        const response = await fetch('/config/urls.yml');
        const data = await response.text();
        const parsed = yaml.load(data);
        setWebCategories(parsed);
    }

    return (
        <Container sx={{ pt: 2 }}>
            <Stack spacing={2}>
                {Object.entries(WebCategories).map(([categoryName, categoryWebpages]) => (
                    <Paper key={categoryName} elevation={1}>
                        <Box m={2}>
                            <Grid item pb={2}>
                                <Typography variant="h4">{categoryName}</Typography>
                            </Grid>
                            <Grid container spacing={4} justifyContent="center">
                                <AppCard appObj={categoryWebpages} dockerMode={dockerMode} />
                            </Grid>
                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Container>
    );
}

export default AppsBox;