import { createBrowserRouter, Navigate } from "react-router-dom";

import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/Login/Login';
import { Notfound } from './components/pages/Notfound/Notfound';

import { Layout } from "./components/Layout/Layout";

export const router = createBrowserRouter([
    {
element: <Layout/>,
children:[
    {
        path:"/",
        element: <Navigate to="/home" replace />
    },
    {
        path:"/home", 
        element: <Home/>
    },
    {
        path:"/login", 
        element: <Login/>
    },
    {
        path:"*", 
        element: <Notfound/>
    }
]
}
])