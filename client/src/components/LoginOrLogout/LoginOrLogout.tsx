
import {useIsAuthenticated, useLogout} from '../../utils/auth';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { Link } from 'react-router-dom'
import { LOGOUT_USER } from '../../store/actions';



export default function LoginOrLogout({loginMode} : {loginMode:boolean, onClick:any}) {

    const logout = useLogout();

    const handleLogout = () => {
        
        logout();
        window.location.href = '/login'
      }

    const isAuthenticated = useIsAuthenticated();

    // pretend I know we're logged out.  This is the true conditional
    if(isAuthenticated) {
        return (
            <ButtonPrimary onClick={handleLogout} text="Logout"/>
        )
    
    } else {
        return (
            <Link to="/login" className="nav-links">
            <ButtonPrimary text="Login"/>
            </Link>
        ) 
    }

}



