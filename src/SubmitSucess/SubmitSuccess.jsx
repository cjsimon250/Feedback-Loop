import { useHistory } from "react-router-dom";

//material ui components
import { Button } from "@mui/material";

function SubmitSuccess() {
  const history = useHistory();

  return (
    <>
      <h1>🎉SUCCESS🎉</h1>
      <p>That was fun.. Try Again?</p>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          history.push("/");
        }}
      >
        Try Again
      </Button>
    </>
  );
}

export default SubmitSuccess;
