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
        <div className="images_div">
          <img
            ref={animatedDivRef}
            className="profilePicture"
            src="/daro2.png"
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
          We're a development duo specializing in building{" "}
            <strong>AI agents </strong>conected to whatsapp, Instagram, websites and <strong>Softwares </strong> built with <strong> Node.js </strong>. We develop both <strong>Softwares   </strong> and<strong> Agents AI </strong> for
            businesses and individuals. We're enthusiasts of working toward 
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
