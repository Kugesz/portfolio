import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ProjectCards from "../components/ProjectCard";
import { title } from "process";

const projects = [
  {
    title: "adri.py",
    status: "In progress",
    description:
      "Az adri.py-t még középiskolában készítettem ami egy python automatizéció volt, amely az iskolánk weboldaláról letöltötte az óracseréket és különböző platformokon képes volt diákokat értesíteni.",
  },
  {
    title: "sequlizer to diagrams",
    status: "In progress",
    description:
      "Ez a projekt sequlizer táblákból képes adatbázis diagrammokat készíteni.",
  },
];

const Main: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className="col-3">
          <img
            className="rounded-circle img-fluid"
            src="https://placehold.co/400"
            alt=""
          />
        </Col>
        <Col className="col-9 ps-5">
          <h1 className="text-center">Kovács Gergő</h1>
          <h5 className="text-center mb-4">Principal Software Developer</h5>
          <p className="border-bottom pb-4">
            I'm a Principal Software Developer specializing in backend
            development. Blockchain really piques my curiosity !
          </p>
          <p className="border-bottom pb-4">
            Interests: Crypto/blockchain, Domain-driven design, Event-driven
            architecture, Serverless, AWS, TypeScript, Node.js, SQL/NoSQL
          </p>
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
        <h1 className="mb-4">Projektek</h1>
        <Row className="g-4">
          {projects.map((project, index) => (
            <ProjectCards key={index} project={project} />
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Main;
