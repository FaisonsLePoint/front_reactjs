import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '@/_services/';

const UserAdd = () => {
    const [user, setUser] = useState([])
    let navigate = useNavigate()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()

        userService.addUser(user)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="UserEdit">
            User Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name="prenom" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;