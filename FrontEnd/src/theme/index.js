import { createMuiTheme, colors  } from "@material-ui/core";

const component = "#282C34";
const textcolor = "#e6e5e8";
const yellow = "#9629E6";

const theme = createMuiTheme({
    palette: {
        background: {
            dark: "#1C2025",
            default: colors.common.white, // สีของ border icon
            paper: component // สีของก้อน componemt
        },
        primary: {
            main: yellow
        },
        secondary: {
            main: yellow
        },
        text: {
            primary: textcolor,
            secondary: textcolor
        }
    },
});

export default theme;
