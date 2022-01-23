import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            main: '#6C63FF',
        },
        secondary: amber,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;