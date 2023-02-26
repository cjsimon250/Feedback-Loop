import { useHistory } from "react-router-dom";
import "./SubmitSuccess.css";

//material ui components
import { Button, FormControl } from "@mui/material";

function SubmitSuccess() {
  const history = useHistory();

  return (
    <>
      <h1 id="success-message">🎉SUCCESS🎉</h1>
      <FormControl id="try-again-prompt">
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
      </FormControl>
    </>
  );
}

export default SubmitSuccess;
