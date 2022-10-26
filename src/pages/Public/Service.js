import React, { useEffect, useState } from 'react';

import { cocktailService } from '@/_services/cocktail.service';
import { useParams } from 'react-router-dom';

const Service = () => {
    const [cocktail, setCocktail] = useState({})
    let {cid} = useParams()

    // Récupération du cocktail depuis l'API
    useEffect(() => {
        cocktailService.getCocktail(cid)
            .then(res => setCocktail(res.data.data))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='service'>
            <img src={'https://picsum.photos/1200/800?random=' + cocktail.id} alt={cocktail.nom} />
            <div>{cocktail.nom}</div>
            <div>{cocktail.description}</div>
            <div>{cocktail.recette}</div>
        </div>
    );
};

export default Service;