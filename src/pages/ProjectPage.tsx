import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { translations } from "../content/Translations";
import { FaGithub } from "react-icons/fa";

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(
    translations["hu"].projects.list.find(
      (project) => project.id.toString() === id
    )
  );

  const getCurrentLanguage = () => {
    const currentLanguage = sessionStorage.getItem("language") as "hu" | "gb";
    setContent(
      translations[currentLanguage].projects.list.find(
        (project) => project.id.toString() === id
      )
    );
  };

  useEffect(() => {
    window.addEventListener("languageChange", getCurrentLanguage);

    return () => {
      window.removeEventListener("languageChange", getCurrentLanguage);
    };
  }, []);
  if (!content) {
    return (
      <Container className="py-5">
        <h2>Projekt nem található</h2>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Vissza a kezdőlapra
        </Button>
      </Container>
    );
  }
  return (
    <Container className="py-5">
      <Button variant="outline-secondary" onClick={() => navigate("/")}>
        ← Vissza
      </Button>
      <Col
        className="
      d-flex align-items-center justify-content-between
      mt-3
      p-2 ps-4 pe-4
      bg-light
      br-2"
      >
        <h1 className="mt-4 mb-4">
          {content.title}{" "}
          <Badge bg={content.status === "completed" ? "success" : "warning"}>
            {content.status}
          </Badge>
        </h1>
        {content.github && (
          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaGithub size={40} />
          </a>
        )}
      </Col>

      <section
        className="
      fs-5
      border-bottom border-2
      pb-4 lh-lg"
      >
        {content.descriptionLong.map((paragraph, idx) => (
          <p key={idx} className="mb-2 text-justify">
            {paragraph}
          </p>
        ))}
      </section>

      <Row>
        <Col md={6} xs={12}>
          <h2 className="mt-4 mb-2">Technológiák</h2>
          <ul>
            {content.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} xs={12}>
          <h2 className="mt-4 mb-2">Mit tanultam?</h2>
          <ul>
            {content.lessons.map((lesson, idx) => (
              <li key={idx}>{lesson}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default ProjectPage;
