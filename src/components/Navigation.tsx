import React, { useState } from "react";

import languageChangeEvent from "../events/LanguageChangeEvent";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { MdOutlineSimCardDownload } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import { translationsNavigation } from "../content/Translations";

const Navigation: React.FC = () => {
  const [language, setLanguage] = useState<"hu" | "gb">("hu");
  const [content, setContent] = useState(translationsNavigation["hu"]);

  const handleLanguageChange = (newLanguage: "hu" | "gb") => {
    setLanguage(newLanguage);
    setContent(translationsNavigation[newLanguage]);
    sessionStorage.setItem("language", newLanguage);
    languageChangeEvent();
  };

  return (
    <Navbar expand="md" bg="light" variant="light" className="mb-5 p-2">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand>{content.brand}</Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#projects">{content.projects}</Nav.Link>
            <Nav.Link href="/contact">{content.contact}</Nav.Link>

            {/* Portfolio Download */}
            <Nav.Link href={"/" + content.fileName} download="portfolio.pdf">
              <MdOutlineSimCardDownload className="me-1" />
              {content.portfolio}
            </Nav.Link>

            {/* Language Selector */}
            <NavDropdown
              title={<ReactCountryFlag countryCode={language} svg />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item onClick={() => handleLanguageChange("hu")}>
                <ReactCountryFlag className="emojiFlag" countryCode="HU" svg />{" "}
                Magyar
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange("gb")}>
                <ReactCountryFlag className="emojiFlag" countryCode="GB" svg />{" "}
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
