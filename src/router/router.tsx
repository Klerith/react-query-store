import { createBrowserRouter } from 'react-router-dom';
import { StoreLayout } from '../products';
import { ErrorPage } from '../ErrorPage';




export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <h1>hola Mundo</h1>
      }
    ]
  },
]);