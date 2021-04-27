import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "react-bootstrap"

const Welcome = () => (
    <Jumbotron fluid>
        <Container>
            <h1 className="text-center pb-3">Welcome!</h1>
            <p className="text-center">Strive books is open 24/7, support is open from 27BC to 1883AD</p>
        </Container>
    </Jumbotron>
)

export default Welcome
