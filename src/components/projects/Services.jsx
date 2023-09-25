import React, { useState } from "react";
import "./Services.css";
import P1 from "../../assets/P1.png"
import P2 from "../../assets/P2.png"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I made</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title">1</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Alert Snackbar</h3>
              <p className="services__modal-description">
              Added an alert snackbar for cases where the user doesn't input their signature.
              </p>
              <img src={P1} alt="" className="P1" id="modalImage" />
              {/*
              
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">I develop the UI</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">Web page development</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">OJT MAN</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">Wala na</p> 
                </li> 
              </ul>*/}

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title">2</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Endorsed Tab</h3>
              <p className="services__modal-description">Added an 'Endorsed' tab to the dashboard.
              </p>
              <img src={P2} alt="" className="P2" />

             {/* <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test2</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
          </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
