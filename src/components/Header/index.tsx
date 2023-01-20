import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translator from "../translator";
import './styles.scss'


function Header() {
    const { t } = useTranslation();
    const [isScroll, setIsScroll] = useState(false);
    const hanndleScroll = () => {
        if (window.scrollY >= 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    window.addEventListener("scroll", hanndleScroll);

    return (
        <header>
            <Navbar
                className={isScroll ? "navbar colorChange" : "navbar"}
                collapseOnSelect
                expand="xl"
                variant={isScroll ? "dark" : "light"}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#">
                        <h1>{t("app_title")}</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#home" >
                                {t("home")}
                            </Nav.Link>
                            <Nav.Link href="#about" >
                                {t("about_me")}
                            </Nav.Link>
                            <Nav.Link href="#education" >
                                {t("education")}
                            </Nav.Link>
                            <Nav.Link href="#experience" >
                                {t("experience")}
                            </Nav.Link>
                            <Nav.Link href="#skill" >
                                {t("skills")}
                            </Nav.Link>
                            <Nav.Link href="#project" >
                                {t("projects")}
                            </Nav.Link>
                            <Nav.Link href="#contact" >
                                {t("contact")}
                            </Nav.Link>
                            <Translator />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Header