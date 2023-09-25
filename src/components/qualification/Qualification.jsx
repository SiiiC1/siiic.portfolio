import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT in Mobile App and Web Development</h3>
                <span className="qualification__subtitle">
                  STI College Balagtas
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2017 - 2019</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internship as a Junior Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  STI College Balagtas
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019 - 2019</i>
                </div>
              </div>
            </div>

            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor of Science in Computer Engineering</h3>
                  <span className="qualification__subtitle">
                    Bulacan State Univeristy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">2019 - 2023</i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Internship as a Frontend Developer</h3>
                  <span className="qualification__subtitle">
                   Bulacan State University<br/> (Planning and Development Office)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">2023 - 2023</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
