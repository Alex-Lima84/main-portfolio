import { useTranslation } from "react-i18next";
import Translator from "../translator";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
    const { t } = useTranslation();
    return (
        <div className="section about" id="about">
            <h1 className="about-me-title">{t("about_me")}</h1>
            <Row className="about-row">
                <Col lg={8} className="about-row">
                    <ScrollAnimation animateIn="animate__bounceInRight">
                        <p className="about-me-text">
                            {t("about_me_text_1")}
                        </p>
                        <p className="about-me-text">
                            {t("about_me_text_2")}
                        </p>
                        <p className="about-me-text">
                            {t("about_me_text_3")}
                        </p>
                        <p className="about-me-text">
                            {t("about_me_text_4")}
                        </p>
                    </ScrollAnimation>
                </Col>
            </Row>
        </div>
    );
}

export default About;