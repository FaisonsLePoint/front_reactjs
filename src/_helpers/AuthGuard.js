import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */
const AuthGuard = ({children}) => {

    if(!accountService.isLogged()){
        return <Navigate to="/auth/login"/>
    }
   
    return children
};

export default AuthGuard;