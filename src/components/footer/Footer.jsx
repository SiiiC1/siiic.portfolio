import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Dodge</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portpolio" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/iitzdodge."
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/lorddodge_"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>

            <a
              href="https://twitter.com/dajasisX"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
        <span className="footer__copy">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
