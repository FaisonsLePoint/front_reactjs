import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllUsers = () => {
    return Axios.get('/users')
}

/**
 * Récupération d'un utilisateur
 * @param {number} uid 
 * @returns {Promise}
 */
let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

/**
 * Ajout d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let addUser = (user) => {
    return Axios.put('/users', user)
}

/**
 * Mise à jour d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let updateUser = (user) => {
    return Axios.patch('/users/'+user.id, user)
}

/**
 * Suppression d'un utilsateur
 * @param {number} uid 
 * @returns {Promise}
 */
let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}

// Décaraltion des esrvices pour import
export const userService = {
    getAllUsers, getUser, addUser, updateUser, deleteUser
}