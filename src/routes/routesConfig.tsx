import Root from "./Root";
import ErrorRoute from "./ErrorRoute";
import PasswordStrength from "../components/PasswordStrength";
import { RandomUser } from "../components/RandomUser";
import { DisneyChar } from "../pages/Disney";
import { Timer } from "../pages/Timer";
import { DragDropListPage } from "../pages/DragDropListPage";
import {StrikethroughItemsPage} from '../pages/StrikethroughItemsPage';
import { ImageCarouselPage } from "../pages/ImageCarouselPage";

import { LinksPathMap } from "../constants/navlinks";

export const routesConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {index: true, element: <DisneyChar />},
      {
        errorElement: <ErrorRoute />,
        children: [
          {
            path: LinksPathMap["password-strength"],
            element: <PasswordStrength />,
          },
          {
            path: LinksPathMap["random-user"],
            element: <RandomUser />,
          },
          {
            path: LinksPathMap["disney-characters"],
            element: <DisneyChar />,
          },
          {
            path: LinksPathMap["countdown-timer"],
            element: <Timer /> 
          },
          {
            path: LinksPathMap["drag-drop-list"],
            element: <DragDropListPage />
          },
          {
            path: LinksPathMap["strikethrough-items"],
            element: <StrikethroughItemsPage />
          },
          {
            path: LinksPathMap['image-carousel'],
            element: <ImageCarouselPage />
          }
        ],
      },
    ],
  },
];
