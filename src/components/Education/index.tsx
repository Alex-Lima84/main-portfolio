import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
    return (
        <section className="section education" id="education">
            <div>
                <h1>Education</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="2.5 years"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>Analysis and systems development</h3>
                        <a href="https://www.unicesumar.edu.br/ead/cursos-graduacao/analise-e-desenvolvimento-de-sistemas/"></a>
                        <h5>College degree - 2024.</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="2.5 years"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>Analysis and systems development</h3>
                        <a href="https://www.unicesumar.edu.br/ead/cursos-graduacao/analise-e-desenvolvimento-de-sistemas/"></a>
                        <h5>College degree - 2024.</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
