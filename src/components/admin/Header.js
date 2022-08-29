import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';

const Header = () => {
    let navigate = useNavigate()

    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (
        <div className="AHeader">
            Header Admin
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Header;