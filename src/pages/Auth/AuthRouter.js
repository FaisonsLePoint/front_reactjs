import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Auth/Login'
import Error from '@/_utils/Error'

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AuthRouter;