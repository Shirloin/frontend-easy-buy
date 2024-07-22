import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import HomePage from '../pages/HomePage'
import { ProtectedRoute } from './ProtectedRoute'
import Layout from '../components/Layout'
export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
            </Route>
        </Routes>
    )
}