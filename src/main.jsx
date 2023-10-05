import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import DonationPage from './Components/DonationPage/DonationPage.jsx';
import StatisticsPage from './Components/StatisticsPage/StatisticsPage.jsx';
import CampaignDetails from './Components/CampaignDetails/CampaignDetails';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "/",
      element: <Home></Home>
    },

    {
      path: "/donation",
      element: <DonationPage></DonationPage>,
    },
    {
      path: "/statistics",
      element: <StatisticsPage></StatisticsPage>,
    },
    {

      path: "/campaign/:id",
      element: <CampaignDetails></CampaignDetails>,
      loader: () => fetch('/data.json')

    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
