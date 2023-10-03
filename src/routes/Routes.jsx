import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path:"/",
            element : <Home></Home>
        },
        {
            path:"/about",
            element : <Home></Home>
        },
        {
            path:"/career",
            element : <Home></Home>
        }
      ]
    },  
  ]);

  export default router;