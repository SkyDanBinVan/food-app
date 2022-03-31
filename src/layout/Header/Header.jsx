import "./Header.css";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand><h1 className="header">Food App</h1></Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/features">
                                    <Nav.Link>Features</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/pricing">
                                    <Nav.Link>Pricing</Nav.Link>
                                </LinkContainer>
                                <NavDropdown
                                    title="Dropdown"
                                    id="collasible-nav-dropdown"
                                >
                                    <LinkContainer to="/">
                                        <NavDropdown.Item>
                                            Action
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/2">
                                        <NavDropdown.Item>
                                            Another action
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/3">
                                        <NavDropdown.Item>
                                            Something
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/4">
                                        <NavDropdown.Item>
                                            Separated link
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        More deets
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/cards">
                                    <Nav.Link>
                                        Cards
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}
