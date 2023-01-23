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

                        date="100 hours"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>Dev em Dobro</h3>
                        <a href="https://dev-em-dobro.members.ticto.com.br/portal"></a>
                        <h5>Complete course for front-end web development, including: HTML5, CSS3, JavaScript (ES6) and ReactJS.</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="14 hours"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>TypeScript - From basic to advanced</h3>
                        <a href="https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/"></a>
                        <h5>Complete course of TypeScript, ReactJS and Express.</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="24 hours"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>Full project with NodeJS, React, React Native and TypeScript</h3>
                        <a href="https://www.udemy.com/course/dev-fullstack/"></a>
                        <h5>Step-by-step development of a fullstack project.</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="5 years"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>English language</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>Complete english course at Fisk language school.</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: "#45A29E", color: "#8892b0" }}

                        date="4 years"
                        dateClassName="education-date"
                        iconStyle={{ background: "#66FCF1", color: "#1F2833" }}
                        icon={<SchoolIcon />}
                    >
                        <h3>Spanish language</h3>
                        <a href="https://fisk.com.br/"></a>
                        <h5>Complete spanish course at Fisk language school.</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
