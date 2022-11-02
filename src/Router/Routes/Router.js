import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> , 
        children:[
            {
              path: '/',
              element: <Home></Home> ,  
            },
            {
              path: '/login',
              element: <Login></Login> ,  
            },
            {
              path: '/register',
              element: <Register></Register> ,  
            },
            {
              path: '/checkout/:id',
              element: <CheckOut></CheckOut> ,
              loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)  
            },
        ]
      }
])
export default router;