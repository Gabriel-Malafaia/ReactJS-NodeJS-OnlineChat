import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#121212",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // minHeight: "100vh",
        },
      },
    },
  },
});

export default theme;
