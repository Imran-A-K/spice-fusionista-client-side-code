/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import ErrorPage from "../components/errorPage/ErrorPage"
import Home from "../components/pages/Home"
import Blog from "../components/pages/Blog"
import ChefRecipes from "../components/pages/ChefRecipes"
import Register from "../components/pages/Register"
import Login from "../components/pages/Login"
import PrivateRoute from "./PrivateRoute/PrivateRoute"

 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`https://spice-fusionista-server-side-code.vercel.app/chefData`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'chefRecipe/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://spice-fusionista-server-side-code.vercel.app/chefData/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ]

    }
])

export default router