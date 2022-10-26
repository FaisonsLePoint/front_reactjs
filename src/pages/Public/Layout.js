import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/public/Header';

import './layout.css'

const Layout = () => {
    return (
        <div className="Layout">
            <Header/>
            
            <Outlet/>

        </div>
    );
};

export default Layout;