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
                        contentStyle={{ background: "#497174", color: "#111b1b" }}


                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_1")}</h3>
                        <a href="https://www.unicesumar.edu.br/ead/cursos-graduacao/analise-e-desenvolvimento-de-sistemas/"></a>
                        <h5>{t("education_course_text_1")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_1")}</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#497174", color: "#111b1b" }}
                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_2")}</h3>
                        <a href="https://dev-em-dobro.members.ticto.com.br/portal"></a>
                        <h5>{t("education_course_text_2")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_2")}</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#497174", color: "#111b1b" }}
                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_3")}</h3>
                        <a href="https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/"></a>
                        <h5>{t("education_course_text_3")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_3")}</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#497174", color: "#111b1b" }}
                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_4")}</h3>
                        <a href="https://www.udemy.com/course/dev-fullstack/"></a>
                        <h5>{t("education_course_text_4")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_4")}</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#497174", color: "#111b1b" }}
                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_5")}</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>{t("education_course_text_5")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_5")}</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#497174", color: "#111b1b" }}
                        dateClassName="education-date"
                        iconStyle={{ background: "#EFF5F5", color: "#1F2833" }}
                        icon={<SchoolIcon />}                    >
                        <h3>{t("education_course_title_6")}</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>{t("education_course_text_6")}</h5>
                        <span className="education-date vertical-timeline-element-date">{t("education_date_6")}</span>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
