import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Layout } from './Layout';
import { useEffect } from "react";
import { refreshUser } from "redux/auth/auth-operations";
import { useAuth } from "shared/hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const Contacts = lazy(() => import('./Contacts'));

export const AppUserRoutes = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() =>{dispatch(refreshUser())}, [dispatch] );
    return (
        !isRefreshing && (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register" element={
                        <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
                    }
                />
                <Route
                    path="/login" element={
                        <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
                    }
                />
                    <Route path="/contacts" element={
                        <PrivateRoute component={Contacts} redirectTo="/login" />
                    }
                    />
            </Route>
            </Routes>
        ) 
    );
};