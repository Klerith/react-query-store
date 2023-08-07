import { createBrowserRouter } from 'react-router-dom';
import { StoreLayout } from '../products';




export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
  },
]);