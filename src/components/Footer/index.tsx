import { useTranslation } from "react-i18next";
import "./styles.scss";

function Footer() {
    const { t } = useTranslation();

    const year = new Date().getFullYear();
    return (
        <footer>
            <p>
                {t("footer_text")} {year} - ⓒ
            </p>
        </footer>
    );
}

export default Footer;