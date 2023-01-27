/* eslint-disable jsx-a11y/alt-text */
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { VscCircuitBoard } from "react-icons/vsc";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";

function Project() {
    const { t } = useTranslation();

    return (
        <section className="section project" id="project">
            <div>
                <h1>{t("projects")}</h1>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}
                    >
                        <h3 className="project-label-title">{t("project_title_1")}</h3>
                        <img className="project-image" src={require(`../../assets/images/store.png`)} />

                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/my-portfolio'
                        >
                            {t("repository")}
                        </Button>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}                    >
                        <h3 className="project-label-title">{t("project_title_2")}</h3>
                        <img className="project-image" src={require(`../../assets/images/store.png`)} />
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/online-store'
                        >
                            {t("repository")}
                        </Button>
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://fictional-online-store.vercel.app/'
                        >
                            {t("website")}
                        </Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}                    >
                        <h3 className="project-label-title">{t("project_title_3")}</h3>
                        <img className="project-image" src={require(`../../assets/images/movie.png`)} />
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/movie-search-api'
                        >
                            {t("repository")}
                        </Button>
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://movie-search-al.vercel.app/'
                        >
                            {t("website")}
                        </Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}                    >
                        <h3 className="project-label-title">{t("project_title_4")}</h3>
                        <img className="project-image" src={require(`../../assets/images/weather.png`)} />
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/weather-forecast'
                        >
                            {t("repository")}
                        </Button>
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://my-weather-forecast.vercel.app/'
                        >
                            {t("website")}
                        </Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}                    >
                        <h3 className="project-label-title">{t("project_title_5")}</h3>
                        <img className="project-image" src={require(`../../assets/images/pokemon.png`)} />
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/pokemon-react-api'
                        >
                            {t("repository")}
                        </Button>
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://pokemon-project-api.netlify.app/'
                        >
                            {t("website")}
                        </Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{
                            borderTop: "3px Solid #1F2833",
                            background: "#EEEEEE",
                            color: "#fff"
                        }}
                        iconStyle={{ background: "#60979b", color: "#111b1b" }}
                        icon={<VscCircuitBoard />}                    >
                        <h3 className="project-label-title">{t("project_title_6")}</h3>
                        <img className="project-image" src={require(`../../assets/images/github.png`)} />
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://github.com/Alex-Lima84/fetch-github-api'
                        >
                            {t("repository")}
                        </Button>
                        <Button
                            className="project-button"
                            variant="light"
                            color="default"
                            target="_blank"
                            href='https://alex-lima84.github.io/fetch-github-api/'
                        >
                            {t("website")}
                        </Button>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Project;
