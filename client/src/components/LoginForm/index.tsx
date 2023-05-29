import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Copyright from "../Copyright";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoxContainer } from "./style";
import { useSignContext } from "../../contexts/SignContext";
import { ILoginSchema, loginSchema } from "../../schemas/forms";

export const AvatarStyles = {
  m: 1,
  bgColor: "#E7E7E7",
};

const SignInSide = () => {
  const { loginUserRequest } = useSignContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ILoginSchema>({
    mode: "onChange",
    delayError: 500,
    resolver: zodResolver(loginSchema),
  });

  return (
    <BoxContainer>
      <Avatar sx={AvatarStyles}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Use sua Conta do ChatApp
      </Typography>
      <Box
        onSubmit={handleSubmit(loginUserRequest)}
        component="form"
        noValidate
        sx={{ mt: 1, width: "100%" }}
      >
        <TextField
          {...register("email")}
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!isValid || !isDirty}
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
};

export default SignInSide;
