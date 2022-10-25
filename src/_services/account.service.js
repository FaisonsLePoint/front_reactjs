import Axios from './caller.service'
import jwt_decode from 'jwt-decode'

/**
 * Connexion vers l'API
 * @param {object} credentials 
 * @returns {Promise}
 */
let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token 
 */
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Suppression du token du localStorage
 */
let logout = () => {
    localStorage.removeItem('token')
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
    return localStorage.getItem('token')
}

/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
    return jwt_decode(getToken())
}

// Déclaration des serivces pour import
export const accountService = {
    login, saveToken, logout, isLogged, getToken, getTokenInfo
}