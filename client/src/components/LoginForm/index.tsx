import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { BoxContainer } from "./style";
import { Link } from "react-router-dom";
import { Copyright } from "../Copyright";
import { Box } from "@mui/material";

const SignInSide = () => {
  return (
    <BoxContainer>
      <Avatar sx={{ m: 1, bgcolor: "#E7E7E7" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Use sua Conta do ChatApp
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="#">Esqueceu sua senha?</Link>
          </Grid>
          <Grid item>
            <Link to={"register"}>
              Não tem uma conta? <span>Registre-se</span>
            </Link>
          </Grid>
        </Grid>
        <Copyright name="Gabriel Malafaia" />
      </Box>
    </BoxContainer>
  );
}

export default SignInSide