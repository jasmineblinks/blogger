import { useContext } from "react";
import "./Header.css"
import {StateContext} from "../../App"
// import { useCallback, useEffect,useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavigationMobile from "./HeaderNavigationMobile";
const Header = () => {

    const {isMobileMenuOpen, isMobileVersion, setIsMobileMenuOpen} = useContext(StateContext)

    return ( 
        <header className="header">
            {isMobileVersion ? 
            <HeaderNavigationMobile isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} /> 
            : <HeaderNavigation/>}


            {/* IF MOBILE MENU IS OPEN HEADER TEXT DISAPPEAR */}
            {!isMobileMenuOpen && 
            <div className="headerText">
                <h1>A modern publishing platform</h1>
                <span>Grow your audience and build online board</span>
                <div className="headerText_buttonsContainer">
                    <div className="button startButton">Start for Free</div>
                <div className="button learnButton">Learn More</div>
                </div>
                
            </div>
            } 
            
            

        </header>
     );
}
 
export default Header;