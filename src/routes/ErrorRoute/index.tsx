import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

export default function ErrorRoute() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  let errorMessage: string = "";
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.message || error?.statusText;
  } else if (error instanceof Error) {
    errorMessage = error?.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    // TODO: Move to constants!!
    errorMessage = "Unknown error";
  }

  return (
    <>
      <div>Oops! An error has occurred</div>
      <div>{errorMessage}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
