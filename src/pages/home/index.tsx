import React, { useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import Typewriter from 'react-ts-typewriter';
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import EmailIcon from "@material-ui/icons/Email";
import homeImage from "../../assets/images/front.png";
import { VscArrowDown } from "react-icons/vsc";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css"
import './styles.scss'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pt", "es"],
    fallbackLng: "en",
    detection: {
      order: ["path", "localStorage", "cookie", "htmlTag", "subdomain"],
    },
    cache: ["cookie"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

function Home() { 
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem('i18nextLng')

  useEffect(() => {
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <section className="section home" id="home">
      <Row>
        <Col lg={6} className="home-col">
          <ScrollAnimation animateIn="animate__backInLeft">
            <h2>Welcome to my portfolio</h2>
            <h2>My name is</h2>
            <h1>Alexandre Luiz</h1>
            <p>
              and I'm a <Typewriter text='Front-End Developer' />
            </p>
            <a
              className="link-button"
              target="_blank"
              href=""
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Resume
            </a>
            <a
              className="link-button"
              target="_blank"
              href="mailto:alexandre.cerutti@live.com"
            >
              <EmailIcon fontSize="large" />
              Hire Me
            </a>
            <div className="scroll-down-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mouse" viewBox="0 0 16 16">
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
              </svg>
              <h3>Scroll down</h3>
              <VscArrowDown />
            </div>
          </ScrollAnimation>
        </Col>
        <div className="image-container">
          <img className="image-home" src={homeImage} alt="homeImage" />
        </div>
      </Row>
    </section>
  );

}

export default Home