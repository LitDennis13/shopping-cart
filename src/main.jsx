import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './main.css'

import PageTemplate from './components/page-template/page-template';
import HomePage from './components/home-page/home-page';
import ShopPage from './components/shop-page/shop-page';
import CartPage from './components/cart-page/cart-page';
import ErrorPage from './components/error-page/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    /*errorElement: <ErrorPage />,*/
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
