import axios from 'axios'
import { accountService } from './account.service'

// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})


// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }

    return request
})

export default Axios