import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FirebaseProvider from './firebase/FirebaseProvider/FirebaseProvider';
import AddService from './Pages/AddService';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Service from './Pages/Service';
import PrivateRoute from './PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:"/addService",
        element:<PrivateRoute><AddService></AddService>-</PrivateRoute>
      },
      {
        path:'/service',
        element:<Service></Service>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <FirebaseProvider>
 <RouterProvider router={router} />
 </FirebaseProvider>
  </React.StrictMode>,
)
