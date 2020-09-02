import React from "react";
import { Container } from "react-bootstrap";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <Container>
      <h1>This is Contact Component</h1>
    </Container>
  );
};
