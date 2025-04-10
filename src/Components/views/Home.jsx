import React, { useEffect, useRef } from "react";
import Hero from "./Hero.jsx";
import Section_1 from "./Section_1.jsx";
import Section_about_us from "./Section_about_us.jsx";
import Section_3_2_ai from "./Section_3_2_ai.jsx";
import Section_4 from "./Section_4.jsx";


import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function FramerMotion() {

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
    <div className="">
        
      <section id="home">
        {Hero ? <Hero /> : <p>Error al cargar el componente Hero.</p>}
      </section>

      <section className="Section1Home1">
        <Section_1 />
      </section>

      {/* ========================   AI developer    ===========================  */}

      <section className="sectionAI ">
        <div className="containerLarge">
        <Section_3_2_ai />
        </div>
      </section>

       {/* ========================   technologies icons  slider      ===========================  */}
       {/* <section>
        <Section_2 />
      </section> */}
      {/* ========================   Section 4_SLIDER      ===========================  */}

      <section className="section_projects " id="projects">
        <div className="containerLarge">
          <Section_4 />
        </div>
      </section>

      {/* ========================   About myself      ===========================  */}

      <section className="Section1Home1 " id="about_us">
      <div className="containerLarge">
        <Section_about_us />
        </div>

      </section>

      {/* =====================        LETS TALK         ======================== */}

      <section className="section-lets-talk ">
        <div className="lets-talk-flexContainer">
          <div className="lets-talk-flexItem">
            <h2>Let's talk!</h2>

            <p>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com "
                className="email-button email-link"
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
               contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* =====================         FOOTER        ======================== */}

      <section>
        <footer className="footer ">
          <div className="footer-content">
            <p>&copy; 2024 Sebastian Prado.</p>
            {/* <div className="social-icons">
              <a
                href="https://github.com/SebaPrado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sebastian_prado31/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div> */}
          </div>
        </footer>
      </section>
    </div>
  );
}

export default FramerMotion;
