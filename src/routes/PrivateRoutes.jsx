import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, } from 'react-router-dom';
import { getToken } from '../helper/tokenHelper';
import { useSelector } from 'react-redux';
import Home from '../pages/Dashboard/Home';
import Profile from '../pages/Dashboard/Profile';
import ErrorPage from './ErrorPage';
import Navbar from '../Component/Navbar';

const PrivateRoutes = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.root.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    useEffect(() => {
        if (!getToken()) navigate("/login")
    }, [])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default PrivateRoutes;

