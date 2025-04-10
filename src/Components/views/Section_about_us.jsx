import React, { useState, useEffect, useRef } from "react";
import "./section_1.css";

const Section_about_us = () => {
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
    <div className="aboutUs_div_padre">
      <div className="aboutUs_div_hijo">
        <div>
          <img
            ref={animatedDivRef}
            className="profilePicture "
            src="/fotoperfil.png"
            alt=""
          />
        </div>
        <div className="   ">
          <h5> Sebastian Prado</h5>
          <h6>Melbourne Bicycle rider</h6>


          <p className="helloText ">
            Seba es .. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Consequuntur laboriosam beatae nam qui reprehenderit, suscipit
            iusto, maiores voluptatibus dignissimos ipsa nesciunt nostrum ipsum
            nemo a quasi incidunt saepe. Numquam, suscipit?
          </p>
        </div>

        {/* <div>
          <a
            href="mailto:sebastian.pradomelesi@gmail.com "
            className="email-button email-link "
            onMouseEnter={(e) => (e.target.style.color = "orange")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            contact us
          </a>
        </div> */}
      </div>
      <div className="aboutUs_div_hijo">
        <div>
          <img
            ref={animatedDivRef}
            className="profilePicture "
            src="/daro2.png"
            alt=""
          />
        </div>
        {/* <div className="  scrollAnimation "> */}
        <div>
          <h5>Dario Elias</h5>
          <h6>Indian languaje expert</h6>
          <p className="helloText ">
            Daro es .. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur laboriosam beatae nam qui reprehenderit, suscipit
            iusto, maiores voluptatibus dignissimos ipsa nesciunt nostrum ipsum
            nemo a quasi incidunt saepe. Numquam, suscipit?
          </p>
        </div>

        {/* <div>
          <a
            href="mailto:sebastian.pradomelesi@gmail.com "
            className="email-button email-link "
            onMouseEnter={(e) => (e.target.style.color = "orange")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            contact us
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Section_about_us;
