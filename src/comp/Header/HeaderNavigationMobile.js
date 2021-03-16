import {ReactComponent as Logo } from '../../images/logo.svg';
import {ReactComponent as Menu} from '../../images/icon-hamburger.svg';
import {ReactComponent as MenuClose} from '../../images/icon-close.svg';
import "./Header.css"
import HeaderItemMobile from './HeaderItemMobile';


const HeaderNavigationMobile = ({isOpen, setIsOpen}) => {
    const handleToggleMenu = () =>{
        setIsOpen(prev=> !prev)
    }

    
    const products = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'] 
    const company = ['About', 'Team', 'Blog', "Careers"]
    const connect = ['Contact', 'Newsletter', 'LinkedIn']


    return ( 
        <div className="headerNavigation_Mobile">
              <div className="logoImage_Mobile">
                <Logo/>
                <div style={{padding: '5px'}} onClick={handleToggleMenu}>
                       {isOpen ? <MenuClose /> : <Menu/>} 
                </div>
            
            </div>
        {isOpen && 
         <div className="optionsMenu_Mobile">
            <div className="headerLeft_Mobile">
               <HeaderItemMobile content={"Product"} list={products}/>
               <HeaderItemMobile content={"Company"} list={company}/>
               <HeaderItemMobile content={"Connect"} list={connect}/>
            </div>
            <div className="headerRight_Mobile">
                <div className="headerItem login">Login</div>
                <div className="headerItem signUp_Mobile">Sign Up</div>
            </div>
        </div>
        }
       
    </div>
     );
}
 
export default HeaderNavigationMobile;