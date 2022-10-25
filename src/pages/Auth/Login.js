import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '@/_services';

import './auth.css'

const Login = () => {
    let navigate = useNavigate()

    // Attention ici mise en place de valeur par défaut pour travailler.
    // NE JAMAIS FAIRE CELA
    const [credentials, setCredentials] = useState({
        email: 'roger@marcel.com',
        password: 'marcel'
    })
    
    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
            .then(res => {
                // Sauvegarde du token et envoi vers admin
                accountService.saveToken(res.data.access_token)
                navigate('/admin', {replace: true})
            })
            .catch(error => console.log(error))
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="email">Identifiant</label>
                <input type="text" name="email"  value={credentials.email} onChange={onChange}/>
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="group">
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;