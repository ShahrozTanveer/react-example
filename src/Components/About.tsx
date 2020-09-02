import React from "react";
import { Container } from "react-bootstrap";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Container>
      <h1>This is About Component</h1>
    </Container>
  );
};
