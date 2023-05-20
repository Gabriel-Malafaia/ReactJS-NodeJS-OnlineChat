import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterDualInput, RegisterForm } from "./style";
import { Copyright } from "../../components/Copyright";
import { useForm } from "react-hook-form";
import { IRegisterSchema, registerSchema } from "../../schemas/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignContext } from "../../contexts/SignContext";

const SignUpSide = () => {
  const { createUserRequest } = useSignContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IRegisterSchema>({
    mode: "onChange",
    delayError: 500,
    resolver: zodResolver(registerSchema),
  });

  return (
    <RegisterForm>
      <Avatar sx={{ m: 1, bgcolor: "#E7E7E7" }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cadastre sua Conta no ChatApp
      </Typography>
      <Box
        onSubmit={handleSubmit(createUserRequest)}
        component="form"
        noValidate
        sx={{ mt: 1, width: "100%" }}
      >
        <RegisterDualInput>
          <TextField
            {...register("name")}
            margin="normal"
            fullWidth
            label="Nome *"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("username")}
            margin="normal"
            fullWidth
            label="Usuário *"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </RegisterDualInput>

        <TextField
          {...register("email")}
          margin="normal"
          fullWidth
          label="E-mail *"
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          {...register("cpf")}
          type="number"
          margin="normal"
          fullWidth
          label="CPF *"
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />

        <RegisterDualInput>
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label="Senha *"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            {...register("confirmPassword")}
            margin="normal"
            fullWidth
            label="Confirmação de Senha *"
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        </RegisterDualInput>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!isDirty || !isValid}
          sx={{ mt: 3, mb: 2 }}
        >
          Cadastrar-se
        </Button>
        <Link className="link-login" to={"/"}>
          Já é cadastrado? <span>Fazer login</span>
        </Link>
        <Copyright name="Gabriel Malafaia" />
      </Box>
    </RegisterForm>
  );
};

export { SignUpSide };
