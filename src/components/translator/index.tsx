import { useEffect } from 'react'
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import GlobeIcon from '../../assets/icons/globe.svg'
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css"
import './styles.scss'

const languages = [
    {
        code: "en",
        name: "English",
        country_code: "us",
    },
    {
        code: "pt",
        name: "Português",
        country_code: "br",
    },
    {
        code: "es",
        name: "Español",
        country_code: "es",
    },
];

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

function Translator() {
    const { t } = useTranslation();
    const currentLanguage = localStorage.getItem('i18nextLng')

    useEffect(() => {
        document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <div className="container" style={{ maxWidth: '60px' }}>
            <div className="dropdown">
                <button
                    className="btn btn-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src={GlobeIcon} alt='globe'></img>
                </button>
                <ul className="dropdown-menu">
                    <li><span className='dropdown-item-text'>{t('language')}</span></li>
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                            <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguage}>
                                <span
                                    className={`fi fi-${country_code} mx-2`}
                                    style={{ opacity: code === currentLanguage ? '0.5' : '1' }}
                                ></span>
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default Translator