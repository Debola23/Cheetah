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
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
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
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);
