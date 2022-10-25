import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { cocktailService, accountService } from '@/_services';

const CocktailAdd = () => {
    const [cocktail, setCocktail] = useState([])
    let navigate = useNavigate()

    // Gestionnaire de modification du formulaire
    const onChange = (e) => {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value
        })
    }

    // Gestionnaire de soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        let {id} = accountService.getTokenInfo()

        cocktail.user_id = id

        cocktailService.addCocktail(cocktail)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="CocktailEdit">
            Cocktail Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom"  onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="recette">Recette</label>
                    <input type="text" name="recette"  onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default CocktailAdd;