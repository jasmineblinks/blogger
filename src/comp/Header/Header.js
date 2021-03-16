import { useContext } from "react";
import "./Header.css"
import {StateContext} from "../../App"
import {motion}from 'framer-motion';

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
                <motion.h1 animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}>A modern publishing platform</motion.h1>
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