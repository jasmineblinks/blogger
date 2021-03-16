import { useContext } from "react";
import "./Header.css";
import { StateContext } from "../../App";
import { motion } from "framer-motion";

// import { useCallback, useEffect,useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavigationMobile from "./HeaderNavigationMobile";
const Header = () => {
  const { isMobileMenuOpen, isMobileVersion, setIsMobileMenuOpen } = useContext(
    StateContext
  );

  return (
    <header className="header">
      {isMobileVersion ? (
        <HeaderNavigationMobile
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
      ) : (
        <HeaderNavigation />
      )}

      {/* IF MOBILE MENU IS OPEN HEADER TEXT DISAPPEAR */}
      {!isMobileMenuOpen && (
        <div className="headerText">
          <motion.h1
            initial={{ y: -350 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.5, duration: 1 }}>
            A modern publishing platform
          </motion.h1>
          <span>Grow your audience and build online board</span>
          <div className="headerText_buttonsContainer">
            <motion.div
              className="button startButton"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.5,
                duration: 2,
                type: "spring",
                stiffness: 120,
              }}>
              Start for Free
            </motion.div>
            <motion.div
              className="button learnButton"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.5,
                duration: 2,
                type: "spring",
                stiffness: 120,
              }}>
              Learn More
            </motion.div>
          </div>
          <div></div>
        </div>
      )}
    </header>
  );
};

export default Header;
