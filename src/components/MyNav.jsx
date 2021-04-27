import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from "react-bootstrap"

const MyNav = props => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNav
