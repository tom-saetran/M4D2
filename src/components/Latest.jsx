import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "react-bootstrap"

const Latest = props => (
    <Jumbotron fluid>
        <Container>
            <h1 className="pb-3">Latest Release:</h1>
            <p className="pb-3">"Strive, a journey through hell"</p>
            <a href={props.imageUrl}>
                <img src={props.imageUrl} alt="Book Cover" height="120px" />
            </a>
        </Container>
    </Jumbotron>
)

export default Latest
