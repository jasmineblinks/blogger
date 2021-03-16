import {ReactComponent as Logo } from '../../images/logo.svg';
import "./Header.css"
import "./HeaderItem.css"

import HeaderItem from './HeaderItem';

const HeaderNavigation = () => {

    
    const products = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'] 
    const company = ['About', 'Team', 'Blog', "Careers"]
    const connect = ['Contact', 'Newsletter', 'LinkedIn']


    return ( 
        <div className="headerNavigation">
        <div className="headerLeft">
            <div className="logoImage">
                <Logo/>
            </div>
            <HeaderItem content={'Product'} list={products}/>
            <HeaderItem content={'Company'} list={company}/>
            <HeaderItem content={'Connect'} list={connect}/>
        </div>
        <div className="headerRight">
            <div className="headerItem login">Login</div>
            <div className="signUp">Sign Up</div>
      
        </div>
    </div>
     );
}
 
export default HeaderNavigation;