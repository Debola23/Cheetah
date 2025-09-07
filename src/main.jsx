import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import 'react-datepicker/dist/react-datepicker.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Listing } from './Pages/Listing/Listing.jsx';
import { Categories } from './Pages/Categories/Categories.jsx';
import { Contact } from './Pages/Contact/Contact.jsx';
import { Favourite } from './Components/Favourite/Favourite.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "/categories",
    element:<Categories/> ,
  },
  {
    path: "/favourite",
    element:<Favourite/> ,
  },
  {
    path: "/contact",
    element:<Contact/> ,
  },
  {
    path: "/listing",
    element:<Listing/> ,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
