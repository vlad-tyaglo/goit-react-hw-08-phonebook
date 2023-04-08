import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#23c0e2',
            light: '#269eb8',
            dark: '#269eb8',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#fcc92f',
            light: '#ffca2a',
            dark: '#fffb66',
        },
        error: {
            main: '#ff0019',
        },
        
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
    },
});