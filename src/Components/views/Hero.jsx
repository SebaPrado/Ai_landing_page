import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Hero = () => {
  const animatedDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.replace("hidden", "blur-in-expand");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const animatedDiv = animatedDivRef.current;
    if (animatedDiv) {
      observer.observe(animatedDiv);
    }

    return () => {
      if (animatedDiv) {
        observer.unobserve(animatedDiv);
      }
    };
  }, []);
  return (
   
    <div className="heroContainer">
      <div className="heroflex1">
        <div className="heroFlexText">
          <h2>Automate Smarter. </h2>
          <h2>Scale Faster.</h2>
          <p>
          We build custom AI agents and automations that streamline your workflows, handle your customer support, and supercharge your growth — all without hiring more staff.
          </p>
        </div>
        <div>
          <img src="/Hero_image.png" alt="Contraer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
