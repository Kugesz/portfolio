import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
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
      window.addEventListener("languageChange", getCurrentLanguage);
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col className="col-3">
          <img
            className="rounded-circle img-fluid"
            // src="https://placehold.co/400"
            src={img}
            alt=""
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        </Col>
        <Col className="col-9 ps-5">
          <h1 className="text-center">{content.introduction.name}</h1>
          <h5 className="text-center mb-4">{content.introduction.title}</h5>
          <p className="border-bottom pb-4">
            {content.introduction.description}
          </p>
          <p className="border-bottom pb-4">{content.introduction.interests}</p>
          <Container className="d-flex flex-row justify-content-between">
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
      <Row className="p-5">
        <h1 className="mb-4" id="projects">
          {content.projects.title}
        </h1>
        <Row className="g-4">
          {content.projects.list.map((project, index) => (
            <ProjectCards key={index} project={project} />
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Main;
