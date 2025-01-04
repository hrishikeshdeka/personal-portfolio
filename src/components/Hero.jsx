
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Software Developer</h1>
              <p>
                Hi, I'm Hrishikesh Deka, a software developer based in Mumbai,
                India. 📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/hrishikesh-deka/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/hrishikeshdeka"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
            </div>
            <a href="#about">
              <div className="hero-img"></div>
            </a>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=java"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=spring"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="skill-icon"
                  />
                </li> 
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=git"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=aws"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=mysql"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="skill-icon"
                  />
                </li>
               
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=docker"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="skill-icon"
                  />
                </li>
                <li>
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
