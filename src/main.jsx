import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import DonationPage from './Components/DonationPage/DonationPage.jsx';
import StatisticsPage from './Components/StatisticsPage/StatisticsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/donation",
        element: <DonationPage></DonationPage>,
      },
      {
        path: "/statistics",
        element: <StatisticsPage></StatisticsPage>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
