import { Nav, Navbar } from "react-bootstrap"

function CustomNavbar() {

    return (
        <Navbar expand="md" className="mb-3">
            <Navbar.Brand href="/">TruDeau</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/manage">Manage TODOs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar
