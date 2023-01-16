import { Alert } from '@mui/material'

function DockerStatus({ container }) {

    return (
        <>
            {
                container.State === 'running' ? (
                    <Alert elevation={5} severity="success">
                        {container.Status.substring(0, 20)}
                    </Alert>
                ) : (
                    container.State === 'paused' ? (
                        <Alert elevation={5} severity="warning">
                            {container.Status.substring(0, 20)}
                        </Alert>
                    ) : (
                        <Alert elevation={5} severity="error">
                            Container error
                        </Alert>
                    ))
            }
        </>
    )
}

export default DockerStatus