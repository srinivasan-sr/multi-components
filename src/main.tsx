
import ReactDOM from "react-dom/client";
import { routesConfig } from "./routes/routesConfig";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { LOADING } from "./constants/textconstants";
import "./index.css";

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} fallbackElement={<p>{LOADING}</p>} />
);
