import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '@/_services';



const UserEdit = () => {
    const [user, setUser] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    // Récupération ID utilisateur    
    const { uid } = useParams()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {     
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    setUser(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="UserEdit">
            User Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" value={user.nom} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name="prenom" value={user.prenom} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" value={user.pseudo} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;