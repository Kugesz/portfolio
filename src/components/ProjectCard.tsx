import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

interface ProjectCardsProps {
  project: { title: string; status: string; description: string };
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project }) => {
  return (
    <Col>
      <Card className="p-3">
        <Row className="d-flex justify-content-between">
          <Card.Title className="border-bottom pb-2 align-items-center d-flex">
            {project.title}{" "}
            {project.status === "In progress" ? (
              <Badge bg="warning" style={{ fontSize: "0.5rem" }}>
                {project.status}
              </Badge>
            ) : (
              <></>
            )}
          </Card.Title>
        </Row>
        <Card.Text>{project.description}</Card.Text>
        <Row className="d-flex justify-content-center">
          <Button className="col-4" variant="outline-secondary">
            Read more
          </Button>
        </Row>
      </Card>
    </Col>
  );
};

export default ProjectCards;
