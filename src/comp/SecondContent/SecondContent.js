import "./SecondContent.css";
import React, { useState, useEffect, useCallback } from "react";
import PhonesSvg from "../../images/illustration-phones.svg";
import { motion, useMotionValue } from "framer-motion";

const SecondContent = () => {
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);
  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingup = yPos < lastYPos;
      setShouldShowActions(isScrollingup);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <div className="secondContent">
      <div className="secondContent_Container">
        <motion.img
          src={PhonesSvg}
          alt=""
          animate={{
            opacity: shouldShowActions ? 1 : 0,
            // scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          initial={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.2 } }}
        />
        <div className="secondContent_Text">
          <h1>State of the Art Infrastucture</h1>
          <span>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
