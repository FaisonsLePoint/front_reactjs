import Axios from './caller.service'

/**
 * Récupération de la liste des cocktails
 * @returns {Promise}
 */
let getAllCocktails = () => {
    return Axios.get('/cocktails')
}

/**
 * Récupération d'un cocktail
 * @param {number} cid 
 * @returns {Promise}
 */
let getCocktail = (cid) => {
    return Axios.get('/cocktails/'+cid)
}

/**
 * Ajout d'un cocktail
 * @param {object} cocktail 
 * @returns {Promise}
 */
let addCocktail = (cocktail) => {
    return Axios.put('/cocktails', cocktail)
}

/**
 * Mise à jour d'un cocktail
 * @param {object} cocktail 
 * @returns {Promise}
 */
let updateCocktail = (cocktail) => {
    return Axios.patch('/cocktails/'+cocktail.id, cocktail)
}

/**
 * Suppression d'un cocktail
 * @param {number} cid 
 * @returns {Promise}
 */
let deleteCocktail = (cid) => {
    return Axios.delete('/cocktails/'+cid)
}

// Déclaration des services pour import
export const cocktailService = {
    getAllCocktails, getCocktail, addCocktail, updateCocktail, deleteCocktail
}