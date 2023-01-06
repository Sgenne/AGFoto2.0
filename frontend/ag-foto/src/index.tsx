import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
