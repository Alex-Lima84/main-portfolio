/* eslint-disable jsx-a11y/anchor-has-content */
import { useTranslation } from "react-i18next";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
    const { t } = useTranslation();

    return (
        <section className="section education" id="education">
            <div>
                <h1>{t("education")}</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_1")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_1")}</h3>
                        <a href="https://www.unicesumar.edu.br/ead/cursos-graduacao/analise-e-desenvolvimento-de-sistemas/"></a>
                        <h5>{t("education_course_text_1")}</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_2")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_2")}</h3>
                        <a href="https://dev-em-dobro.members.ticto.com.br/portal"></a>
                        <h5>{t("education_course_text_2")}</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_3")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_3")}</h3>
                        <a href="https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/"></a>
                        <h5>{t("education_course_text_3")}</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_4")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_4")}</h3>
                        <a href="https://www.udemy.com/course/dev-fullstack/"></a>
                        <h5>{t("education_course_text_4")}</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_5")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_5")}</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>{t("education_course_text_5")}</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date={t("education_date_6")}
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>{t("education_course_header_6")}</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>{t("education_course_text_6")}</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
