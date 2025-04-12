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
            className="profilePicture hidden"
            src="/about_us.png"
            alt=""
          />
        </div>
        <div className="scrollAnimation">
          <p className="helloText">
            We're a small, agile team with a big focus: helping businesses
            unlock the power of AI and automation. With{" "} <strong>over 5 years of experience as a full stack freelance developer{" "}</strong>
            .
          </p>
          <p className="helloText">
            We have successfully delivered custom tech solutions to{" "}
            <strong> clients across the UK, Spain, the US, and Germany.</strong>{" "}
            From building scalable web apps to streamlining backend systems, we
            know how to turn complex problems into elegant, efficient code.
          </p>
          <p className="helloText">
            We bring <strong> hands-on experience in AI </strong>, adding a
            strategic layer to our work — from designing intelligent workflows
            to building agents that actually understand and act. We blend deep
            technical know-how with a lean, collaborative approach to bring you
            automations and AI agents that actually move the needle.
          </p>
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
