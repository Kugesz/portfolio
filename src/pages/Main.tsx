import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ProjectCards from "../components/ProjectCard";
import { translations } from "../content/Translations";

import img from "../public/img/picture.png";

const Main: React.FC = () => {
  const [content, setContent] = useState(translations["hu"]);

  const getCurrentLanguage = () => {
    const currentLanguage = sessionStorage.getItem("language") as "hu" | "gb";
    setContent(translations[currentLanguage]);
  };

  useEffect(() => {
    window.addEventListener("languageChange", getCurrentLanguage);

    return () => {
      window.removeEventListener("languageChange", getCurrentLanguage);
    };
  }, []);

  return (
    <Container className="py-4">
      {/* Profile Section */}
      <Row className="align-items-center text-center text-md-start">
        <Col
          xs={12}
          md={4}
          lg={3}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <img
            className="rounded-circle img-fluid"
            src={img}
            alt="Profile"
            style={{
              maxWidth: "200px",
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="ps-md-5">
          <h1 className="text-center">{content.introduction.name}</h1>
          <h5 className="text-center mb-4">{content.introduction.title}</h5>
          <p className="border-bottom pb-3">
            {content.introduction.description}
          </p>
          <p className="border-bottom pb-3">{content.introduction.interests}</p>
          {/* Social Links */}
          <Container className="d-flex justify-content-center justify-content-md-around gap-3">
            <a href="/">
              <IoHomeOutline size={25} color="grey" />
            </a>
            <a href="">
              <MdOutlineEmail size={25} color="grey" />
            </a>
            <a href="https://github.com/Kugesz">
              <FaGithub size={25} color="grey" />
            </a>
            <a href="https://www.linkedin.com/in/gerg%C5%91-kov%C3%A1cs-38335434b/">
              <FaLinkedin size={25} color="grey" />
            </a>
            <a href="https://www.instagram.com/kugesz01/">
              <FaInstagram size={25} color="grey" />
            </a>
          </Container>
        </Col>
      </Row>

      {/* Projects Section */}
      <Row className="mt-5">
        <Col>
          <h1 className="mb-4 text-center text-md-start" id="projects">
            {content.projects.title}
          </h1>
        </Col>
      </Row>
      <Row className="g-4">
        {content.projects.list.map((project, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <ProjectCards project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
