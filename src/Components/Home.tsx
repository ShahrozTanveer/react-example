import React from "react";
import { Container } from "react-bootstrap";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <h1>This is Home Component</h1>
    </Container>
  );
};
