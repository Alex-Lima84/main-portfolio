import { useTranslation } from "react-i18next";
import { Row, Col, Card } from "react-bootstrap";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import ScrollAnimation from "react-animate-on-scroll";
import { BsTools } from "react-icons/bs";
import {
    SiJavascript,
    SiTypescript,
    SiSmartthings
} from "react-icons/si";
import { VscBook } from "react-icons/vsc";
import "./styles.scss";

function Skill() {
    const { t } = useTranslation();

    return (
        <section className="section skill" id="skill">
            <div>
                <h1>Skills</h1>
            </div>
            <div>
                <Row>

                    <Col lg="3">
                        <ScrollAnimation animateIn="animate__slideInDown">
                            <Card className="skill-card">
                                <CardContent>
                                    <Avatar style={{
                                        background: "#000",
                                        color: "#f7eb00",
                                        width: "6rem",
                                        height: "6rem",
                                        margin: "10px auto"
                                    }}>
                                        <SiJavascript size={50} />
                                    </Avatar>
                                    <h3>Javascript</h3>
                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item">
                                            ES6
                                        </li>
                                        <li className="list-group-item">
                                            ReactJS
                                        </li>
                                        <li className="list-group-item">
                                            Hooks
                                        </li>
                                        <li className="list-group-item">
                                            Styled Components
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Col>

                    <Col lg="3">
                        <ScrollAnimation animateIn="animate__slideInDown">
                            <Card className="skill-card">
                                <CardContent>
                                    <Avatar style={{
                                        background: "#f6f6f6",
                                        color: "#2F74C0",
                                        width: "6rem",
                                        height: "6rem",
                                        margin: "10px auto"
                                    }}>
                                        <SiTypescript size={50} />
                                    </Avatar>
                                    <h3>TypeScript</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            ReactJS
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Col>

                    <Col lg="3">
                        <ScrollAnimation animateIn="animate__slideInDown">
                            <Card className="skill-card">
                                <CardContent>
                                    <Avatar style={{
                                        background: "#068870",
                                        color: "#fff",
                                        width: "6rem",
                                        height: "6rem",
                                        margin: "10px auto"
                                    }}>
                                        <VscBook size={50} />
                                    </Avatar>
                                    <h3>{t("others_tech")}</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            HTML5
                                        </li>
                                        <li className="list-group-item">
                                            CSS3
                                        </li>
                                        <li className="list-group-item">
                                            Sass
                                        </li>
                                        <li className="list-group-item">
                                            Bootstrap
                                        </li>
                                        <li className="list-group-item">
                                            {t("others_tech_text")}
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Col>

                    <Col lg="3">
                        <ScrollAnimation animateIn="animate__slideInDown">
                            <Card className="skill-card">
                                <CardContent>
                                    <Avatar style={{
                                        background: "#6F8EAD",
                                        color: "#fff",
                                        width: "6rem",
                                        height: "6rem",
                                        margin: "10px auto"
                                    }}>
                                        <SiSmartthings size={50} />
                                    </Avatar>
                                    <h3>Soft Skills</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {t("soft_skills_text_1")}
                                        </li>
                                        <li className="list-group-item">
                                            {t("soft_skills_text_2")}
                                        </li>
                                        <li className="list-group-item">
                                            {t("soft_skills_text_3")}
                                        </li>
                                        <li className="list-group-item">
                                            {t("soft_skills_text_4")}
                                        </li>
                                        <li className="list-group-item">
                                            {t("soft_skills_text_5")}
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Col>

                    <Col lg="3">
                        <ScrollAnimation animateIn="animate__slideInDown">
                            <Card className="skill-card">
                                <CardContent>
                                    <Avatar style={{
                                        background: "#740be3",
                                        color: "#fff",
                                        width: "6rem",
                                        height: "6rem",
                                        margin: "10px auto"
                                    }}>
                                        <BsTools size={50} />
                                    </Avatar>
                                    <h3>Tools</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            Visual Studio Code
                                        </li>
                                        <li className="list-group-item">
                                            Git
                                        </li>
                                        <li className="list-group-item">
                                            Bitbucket
                                        </li>
                                        <li className="list-group-item">
                                            Github
                                        </li>
                                        <li className="list-group-item">
                                            Trello
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Col>

                </Row>
            </div>
        </section>
    );
}

export default Skill;