import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#556cd6",
            light: "#f1f5f9"
        },
        secondary: {
            main: "#94a3b8"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#070919"
        },
        text: {
            primary: "#f1f5f9",
            secondary: "#94a3b8"
        }
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

export default theme;
