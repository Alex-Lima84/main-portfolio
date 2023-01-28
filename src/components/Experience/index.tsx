import { useTranslation } from "react-i18next";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";
import "./styles.scss";

function Experience() {
    const { t } = useTranslation();

    return (
        <section className="section experience" id="experience">
            <div>
                <h1>{t("experience")}</h1>
                <VerticalTimeline>

                    <VerticalTimelineElement

                        contentStyle={{ background: "#D6E4E5", color: "#fff" }}
                        dateClassName="experience-date"
                        iconStyle={{ background: "#60979b", color: "#497174" }}
                        icon={<WorkIcon />}                    >
                        <h3>{t("experience_company_1")}</h3>
                        <h5>{t("experience_area_1")}</h5>
                        <span className="experience-date vertical-timeline-element-date">{t("experience_date_1")}</span>
                        <List>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_1_a")}
                                </ListItemText>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_1_b")}
                                </ListItemText>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_1_c")}
                                </ListItemText>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_1_d")}
                                </ListItemText>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_1_e")}
                                </ListItemText>
                            </ListItem>

                        </List>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement

                        contentStyle={{ background: "#D6E4E5", color: "#fff" }}
                        dateClassName="experience-date"
                        iconStyle={{ background: "#60979b", color: "#497174" }}
                        icon={<WorkIcon />}                    >
                        <h3>{t("experience_company_2")}</h3>
                        <h5>{t("experience_area_2")}</h5>
                        <span className="experience-date vertical-timeline-element-date">{t("experience_date_2")}</span>
                        <List>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_2_a")}
                                </ListItemText>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <DoneTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText className="experience-list">
                                    {t("experience_detail_2_b")}
                                </ListItemText>
                            </ListItem>

                        </List>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
