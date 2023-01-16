import { AppBar, Box, Toolbar, Typography, Switch } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { Icon } from '@iconify/react';

function NavBar({ dockerMode, setDockerMode }) {

    function handleChange(event) {
        setDockerMode(event.target.checked);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <StorageIcon fontSize="large" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} m={1}>
                        Koko Dashboard
                    </Typography>
                    <Icon icon="mdi:docker" width="45" height="45" />
                    <Switch
                        checked={dockerMode}
                        onChange={handleChange}
                        aria-label="login switch"
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;

//Export the dockerMode to AppsBox