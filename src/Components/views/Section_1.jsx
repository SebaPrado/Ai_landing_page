import React, { useState, useEffect, useRef } from "react";
import "./section_1.css";

const Section_1 = () => {
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
    <div className="personalPresentation">
      <div className="textPersonalSection">
        <div>
          <img
            ref={animatedDivRef}
            className="profilePicture"
            src="/daro.jpg"
            alt=""
          />
           <img
            ref={animatedDivRef}
            className="profilePicture "
            src="/fotoperfil.png"
            alt=""
          />
        </div>
        <div className="  scrollAnimation ">
          <p className="helloText ">
          Hey! We're a development duo specializing in{" "}
            <strong>Open AI </strong>, <strong>Node.js </strong> and
            <strong> React </strong>. I develop both <strong>Websites   </strong> and<strong> Agents AI </strong> for
            businesses and individuals.We're enthusiasts of working toward 
            <strong> objectives</strong> instead of hourly rates, joining goals and earning trust <strong> through results </strong> . 
            Let's bring your idea to life!
          </p>
          {/* <p className="letsTalk  ">Let's Talk button...</p> */}
        </div>

        <div>
          <a
            href="mailto:sebastian.pradomelesi@gmail.com "
            className="email-button email-link "
            onMouseEnter={(e) => (e.target.style.color = "orange")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
