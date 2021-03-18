// import FirstContent from "./comp/FirstContent/FirstContent";
import Header from "./comp/Header/Header";
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import SecondContent from "./comp/SecondContent/SecondContent";
import ThirdContent from "./comp/ThirdContent/ThirdContent";
import Footer from "./comp/Footer/Footer";
import { motion } from "framer-motion";

export const StateContext = React.createContext();

function App() {
  // function MyComponent() {
  //   const x = useMotionValue(0);
  //   const xRange = [-200, -100, 100, 200];
  //   const opacityRange = [0, 1, 1, 0];
  //   const opacity = useTransform(x, xRange, opacityRange);

  //   return <Frame x={x} animate={{ x: 200 }} opacity={opacity} />;
  // }
  const [isMobileVersion, setIsMobileVersion] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resizeFunction = useCallback(() => {
    if (window.innerWidth < 801) {
      if (!isMobileVersion) {
        setIsMobileVersion(true);
      }
    } else {
      if (isMobileVersion) {
        setIsMobileVersion(false);
        setIsMobileMenuOpen(false);
      }
    }
  }, [isMobileVersion]);

  useEffect(() => {
    resizeFunction();
    window.addEventListener("resize", resizeFunction);
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [resizeFunction]);

  return (
    <StateContext.Provider
      value={{
        isMobileVersion,
        setIsMobileVersion,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}>
      <div className="app">
        <Header />
        {/* <FirstContent /> */}
        <SecondContent />
        <ThirdContent />
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;
