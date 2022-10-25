import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="SideMenu">
           <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user/index">Liste</Link></li>
                        <li><Link to="/admin/user/add">Ajouter</Link></li>
                    </ul>
                </li>
                <li>
                    Cocktail
                    <ul>
                        <li><Link to="/admin/cocktail/index">Liste</Link></li>
                        <li><Link to="/admin/cocktail/add">Ajouter</Link></li>
                    </ul>
                </li>
           </ul>
        </div>
    );
};

export default SideMenu;