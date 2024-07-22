import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import HomePage from '../pages/HomePage'
import { ProtectedRoute } from './ProtectedRoute'
import Layout from '../components/Layout'
import { GuestRoute } from './GuestRoute'
export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route element={<ProtectedRoute />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
            </Route>
            <Route element={<GuestRoute />} >
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}