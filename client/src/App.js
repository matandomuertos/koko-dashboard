import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar.js';
import AppsBox from './components/AppsBox.js';

function App() {

  const [dockerMode, setDockerMode] = React.useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: [
        'Helvetica Neue'
      ]
    },
  }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar dockerMode={dockerMode} setDockerMode={setDockerMode} />
        <AppsBox dockerMode={dockerMode} />
      </div>
    </ThemeProvider>
  )
}

export default App;