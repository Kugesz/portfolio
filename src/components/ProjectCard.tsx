import React from "react";
import { Badge, Button, Card, Row } from "react-bootstrap";

interface ProjectCardsProps {
  project: { title: string; status: string; description: string };
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project }) => {
  return (
    <Card className="col-3 p-3 md-4">
      <Row className="d-flex justify-content-between">
        <Card.Title className="border-bottom pb-2">
          {project.title}{" "}
          {project.status === "In progress" ? (
            <Badge bg="warning">{project.status}</Badge>
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
  );
};

export default ProjectCards;
