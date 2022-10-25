import React from 'react';
import { Routes, Route } from "react-router-dom"

import { ALayout, Dashboard } from '@/pages/Admin'
import { User, UEdit, UAdd } from '@/pages/Admin/User'
import { Cocktail, CEdit, CAdd } from '@/pages/Admin/Cocktail'

import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UEdit/>}/>
                    <Route path="add" element={<UAdd/>}/>
                </Route>
                <Route path="cocktail">
                    <Route path="index" element={<Cocktail/>}/>
                    <Route path="edit/:cid" element={<CEdit/>}/>
                    <Route path="add" element={<CAdd/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;