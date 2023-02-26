import { useHistory } from "react-router-dom";

function SubmitSuccess() {
  const history = useHistory();

  return (
    <>
      <h1>🎉SUCCESS🎉</h1>
      <p>That was fun.. Try Again?</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Try Again
      </button>
    </>
  );
}

export default SubmitSuccess;
