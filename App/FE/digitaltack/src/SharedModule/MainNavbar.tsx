import { Navbar, Container } from "react-bootstrap";

const MainNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Retro Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
);

export default MainNavbar;
