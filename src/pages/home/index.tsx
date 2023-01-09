import React, { useEffect } from 'react'
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Nav from '../../components/nav'
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css"

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
    <div className="container">
      <Nav />
      <section className="hero">

        <h1>{t("initial_message_1")}</h1>
        <h2>Alexandre Luiz.</h2>
        <h3>{t("initial_message_2")}</h3>
        <p> {t("initial_message_3")}</p>

      </section>

    </div>
  );

}

export default Home