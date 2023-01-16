import { Box } from '@mui/material';
import StopContainerButton from './dockerControlComponents/StopContainerButton';
import PauseStartContainerButton from './dockerControlComponents/PauseStartContainerButton';
import RestartContainerButton from './dockerControlComponents/RestartContainerButton';

function ManageDocker({ app, containerName, setLoading }) {

    return (
        <Box sx={{ display: 'flex', pt: 2, justifyContent: 'center' }}>
            <RestartContainerButton app={app} containerName={containerName} setLoading={setLoading} />
            <PauseStartContainerButton app={app} containerName={containerName} setLoading={setLoading} />
            <StopContainerButton app={app} containerName={containerName} setLoading={setLoading} />
        </Box>

    )
}

export default ManageDocker