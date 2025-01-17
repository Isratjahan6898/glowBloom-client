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
import ViewDetails from './Pages/ViewDetails';
import BookedForm from './Pages/BookedForm';
import Manage from './Pages/Manage';
import Update from './Pages/Update';
import Booked from './Pages/Booked';
import ServiceTo from './Pages/ServiceTo';



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
      },
      {
        path:'/service/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
      },

      {
          path:'/book/:id',
          element:<PrivateRoute><BookedForm></BookedForm></PrivateRoute>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
      },
      {
        path:'/manage',
        element:<PrivateRoute><Manage></Manage></PrivateRoute>
      },
      {
        path:'/booked',
        element:<PrivateRoute><Booked></Booked></PrivateRoute>
      },
      {
        path:'/service-to',
        element:<PrivateRoute><ServiceTo></ServiceTo></PrivateRoute>
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
