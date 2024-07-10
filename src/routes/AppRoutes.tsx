import { Route , Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import HomePage from '../pages/HomePage'
import { ProtectedRoute } from './ProtectedRoute'
export default function AppRoutes() {


    // const authenticatedRoutes = [
    //     {
    //         path: '/',
    //         element: <ProtectedRoute/>,
    //         children: [
    //             {
    //                 path: '/',
    //                 element: <HomePage/>
    //             }
    //         ]
    //     }
    // ]

    // const notAuthenticatedRoutes = [
    //     {
    //         path: '/login',
    //         element: <LoginPage/>
    //     },
    //     {
    //         path: '/register',
    //         element: <RegisterPage/>
    //     },

    // ]

    // const router = createBrowserRouter([
    //     ...authenticatedRoutes,
    //     ...(!token ? notAuthenticatedRoutes : []),
    // ])

    // return <RouterProvider router={router}/>

    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute />}>
                <Route path='/' element={<HomePage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    )
}