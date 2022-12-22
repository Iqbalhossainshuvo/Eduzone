import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Courses/Course";
import Courses from "../Courses/Courses";
import Faq from "../FAQ/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Signin from "../SignIn/Signin";
import Main from "./Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
           {
                path:'/',
                element: <Home></Home>,
            }, 
            {
                path:'/home',
                element: <Home></Home>,
            },
            {
                path:'/courses',
                element: <Courses></Courses> ,
            },
           {
                path:'/courses/:id',
                element: <Course/> ,
                loader:({params})=>fetch(`https://eduzone-brown.vercel.app/courses/${params.id}`)
            }, 
            {
                path:'/faq',
                element: <Faq></Faq>,
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes> ,
            }, 
            {
                path:'/signin',
                element: <Signin></Signin> ,
            },
           {
                path:'/login',
                element:<Login></Login> ,
            }, 
        ]
    }
   
])


export default router;
