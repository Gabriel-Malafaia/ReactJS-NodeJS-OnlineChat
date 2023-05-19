import { Alert, Snackbar } from "@mui/material";

export type ITypeToast = "error" | "success" | "warning" | "info";
export interface IToastSuccessProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  message: string;
  type: ITypeToast;
}

const ToastSuccess = ({
  open,
  setOpen,
  time,
  message,
  type,
}: IToastSuccessProps) => {
  const handleClose = (_: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={time}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastSuccess;
