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
          <h2>Welcome</h2>
          <p>
            We're Sebastian and Dario, two fullstack developer specializing in AI agents with
            OpenAI, Node.js and lowcode softwares. Together, we create AI assistants and Softwares empowered by Ai.
          </p>
        </div>
        <div>
          <img src="/hero_setup.jpg" alt="Contraer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
