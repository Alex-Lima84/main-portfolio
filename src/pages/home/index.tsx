/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import Typewriter from 'react-ts-typewriter';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import "animate.css/animate.min.css";
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
import mouse from '../../assets/svgs/mouse.svg'
import resume from '../../assets/docs/resume.pdf'
import curriculo from '../../assets/docs/curriculo.pdf'
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

          <h2>{t("initial_message_1")}</h2>
          <h2>{t("initial_message_2")}</h2>
          <h1>Alexandre Luiz</h1>
          <p>
            {t("initial_message_3")} <Typewriter text={t("initial_message_4")} />
          </p>
          {currentLanguage === 'en' || currentLanguage === 'es' ? <a
            className="link-button"
            target="_blank"
            href={resume}
            download rel="noreferrer"
          >
            <PictureAsPdfIcon fontSize="large" />
            {t("resume")}
          </a> : <a
            className="link-button"
            target="_blank"
            href={curriculo}
            download rel="noreferrer"
          >
            <PictureAsPdfIcon fontSize="large" />
            {t("resume")}
          </a>}

          <a
            className="link-button"
            target="_blank"
            href="mailto:alexandre.cerutti@live.com" rel="noreferrer"
          >
            <EmailIcon fontSize="large" />
            {t("hire_me")}
          </a>
          <div className="scroll-down-container">
            <img src={mouse} alt='mouse' />
            <h3>{t("scroll_down")}</h3>
            <VscArrowDown />
          </div>

        </Col>
        <div className="image-container">
          <img className="image-home" src={homeImage} alt="homeImage" />
        </div>
      </Row>
    </section>
  );

}

export default Home