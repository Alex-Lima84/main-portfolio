import { useTranslation } from "react-i18next";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./styles.scss";

function Contact() {
    const { t } = useTranslation();

    return (
        <section className="section contact" id="contact">
            <h1>{t("contact")}</h1>
            <ul className="social-medias-list">                
                <li className="contact-col">
                    <a className="contact-a" href="https://github.com/Alex-Lima84">
                        <GitHubIcon />
                    </a>
                </li>
                <li className="contact-col">
                    <a className="contact-a" href="https://www.instagram.com/alexandreluizcl/">
                        <InstagramIcon />
                    </a>
                </li>
                <li className="contact-col">
                    <a className="contact-a" href="https://www.linkedin.com/in/alexandre-cerutti/">
                        <LinkedInIcon />
                    </a>
                </li>
                <li className="contact-col">
                    <a className="contact-a" href="mailto:alexandre.cerutti@live.com">
                        <EmailIcon />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
