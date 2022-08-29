import Axios from './caller.service'

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

export const userService = {
    getAllUsers, getUser
}