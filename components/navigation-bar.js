import {
  Container,
  Nav,
  Navbar,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
  NavbarBrand,
} from 'react-bootstrap';
import {metadata} from "@/app/layout";


export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-success-subtle mb-4">
      <Container>
        <NavbarBrand href="/">{metadata.title}</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav"/>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/development">Development</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
};
