import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_services';

const Header = () => {
    let navigate = useNavigate()

    // Gestion du bouton de déconnexion
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