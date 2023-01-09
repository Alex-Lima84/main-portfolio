import { useTranslation } from "react-i18next";
import Translator from "../translator";



function Nav() {
    const { t } = useTranslation();

    return (
        <nav>
            <span>{t("app_title")}</span>
            <Translator />
            <ul>
                <li><a href="#about"><span>01.</span>{t("about_me")}</a></li>
                <li><a href="#abilities"><span>02.</span>{t("abilities")}</a></li>
                <li><a href="#projects"><span>03.</span>{t("projects")}</a></li>
                <li><a href="" className="resume-link">{t("resume")}</a></li>
            </ul>
        </nav>
    );

}

export default Nav