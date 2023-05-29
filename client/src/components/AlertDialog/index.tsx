import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { IAlertDialog } from "../../interfaces/components";

const AlertDialog = ({ open, setOpen }: IAlertDialog) => {
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.clear();
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Já vai embora? :("}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza de que deseja sair? Ao fazer isso, você encerrará
            sua sessão atual e perderá o acesso às funcionalidades exclusivas da
            nossa plataforma.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            Sair
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
