import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import StatisticsPage from './Components/StatisticsPage/StatisticsPage.jsx';
import CampaignDetails from './Components/CampaignDetails/CampaignDetails';
import Home from './Components/Home/Home';
import MyDonation from './Components/MyDonation/MyDonation.jsx';

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
      element: <MyDonation></MyDonation>,
      loader: () => fetch('/data.json')
    },

    {
      path: "/statistics",
      element: <StatisticsPage></StatisticsPage>,
      loader: () => fetch('/data.json')
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
