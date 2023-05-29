import { CircularProgress } from "@mui/material";
import { StyledCircularProgress } from "./style";

const Progress = () => {
  return (
    <StyledCircularProgress>
      <CircularProgress color="primary" />
    </StyledCircularProgress>
  );
};

export default Progress;
