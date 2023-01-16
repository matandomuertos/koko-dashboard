import { useState, useEffect } from 'react';
import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import container from './../features/container.js';
import DockerStatus from './DockerStatus.js';
import DockerControls from './DockerControls.js';

function DockerMenu({ dockerMode, containerName }) {

    const [app, setApp] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        retrieveContainers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function retrieveContainers() {
        if (containerName) {
            setLoading(true)
            container.getContainer(containerName).then(response => {
                setLoading(false)
                renderCont(response.data.container)
            })
        }
    }

    function renderCont(contData) {
        contData.map((data) => (setApp(data)))
    }

    function isLoading(element) {
        if (loading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>
                    <CircularProgress color="inherit" />
                </Box>
            )
        }
        else {
            return (
                <>
                    {
                        element === "controls" ? (
                            <DockerControls app={app} containerName={containerName} setLoading={setLoading} />
                        ) : (
                            <DockerStatus container={app} />
                        )
                    }
                </>

            )
        }
    }

    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                {containerName ? isLoading("status") : <Alert elevation={5} severity="info">Container not declared</Alert>}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 1 }}>
                {dockerMode ? isLoading("controls") : ''}
            </Grid>
        </Grid>
    )
}

export default DockerMenu