import React, { useState } from "react";

import languageChangeEvent from "../events/LanguageChangeEvent";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
    <Navbar className="mb-5 p-2 ps-4" bg="light" variant="light">
      <Navbar.Brand>{content.brand}</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#projects">{content.projects}</Nav.Link>
        <Nav.Link href="/contact">{content.contact}</Nav.Link>
        <Nav.Link href={"/" + content.fileName} download="portfolio.pdf">
          <MdOutlineSimCardDownload />
          {content.portfolio}
        </Nav.Link>
        <NavDropdown
          title={<ReactCountryFlag countryCode={language} svg />}
          id="basic-nav-dropdown"
          align="end"
        >
          <NavDropdown.Item onClick={() => handleLanguageChange("hu")}>
            <ReactCountryFlag className="emojiFlag" countryCode="HU" svg />{" "}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleLanguageChange("gb")}>
            <ReactCountryFlag className="emojiFlag" countryCode="GB" svg />{" "}
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
