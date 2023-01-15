import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Translator from "../translator";
import './styles.scss'


function Nav() {
    const { t } = useTranslation();
    const [showFirstLink, setShowFirstLink] = useState(false)
    const [showSecondLink, setShowSecondLink] = useState(false)
    const [showThirdLink, setShowThirdLink] = useState(false)
    const [showFourthLink, setShowFourthLink] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowFirstLink(true)
        }, 300)
        setTimeout(() => {
            setShowSecondLink(true)
        }, 700)
        setTimeout(() => {
            setShowThirdLink(true)
        }, 1100)
        setTimeout(() => {
            setShowFourthLink(true)
        }, 1500)
    }, [])

    return (

        <header className="header">
            <div className="header-container">
                <a href="/portfolio-page/">
                    <h1>{t("app_title")}</h1>
                </a>
                <nav>
                    <input type="checkbox" id="menu-hamburguer" />
                    <label htmlFor="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer"></span>
                        </div>
                    </label>
                    <ul>
                        {showFirstLink && <li><a href="#about"><span>01.</span>{t("about_me")}</a></li>}
                        {showSecondLink && <li><a href="#abilities"><span>02.</span>{t("abilities")}</a></li>}
                        {showThirdLink && <li><a href="#projects"><span>03.</span>{t("projects")}</a></li>}
                        {showFourthLink && <li><a href="" className="resume-link">{t("resume")}</a></li>}

                    </ul>
                </nav>
                <Translator />
            </div>
        </header>


    );

}

export default Nav