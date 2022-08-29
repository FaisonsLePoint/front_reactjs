import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '@/_services';

import './auth.css'

const Login = () => {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
        email: 'roger@marcel.com',
        password: 'marcel'
    })
    

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
            .then(res => {
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