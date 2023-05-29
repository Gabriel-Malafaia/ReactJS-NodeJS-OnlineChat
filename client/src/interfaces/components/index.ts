export interface ICopyrightProps {
  name: string;
  color?: string;
  linkColor?: string;
  marginTop?: number;
}

export interface IAlertDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
