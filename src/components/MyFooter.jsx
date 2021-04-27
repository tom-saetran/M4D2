import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"

const MyFooter = () => (
    <Container stick="bottom">
        <Row>
            <Col>
                <strong>Group A</strong>
            </Col>
            <Col>
                <strong>Group B</strong>
            </Col>
            <Col>
                <strong>Group C</strong>
            </Col>
            <Col>
                <strong>Group D</strong>
            </Col>
        </Row>
        <Row>
            <Col>Item A1</Col>
            <Col>Item B1</Col>
            <Col>Item C1</Col>
            <Col>Item D1</Col>
        </Row>
        <Row>
            <Col>Item A2</Col>
            <Col>Item B2</Col>
            <Col>Item C2</Col>
            <Col>Item D2</Col>
        </Row>
        <Row>
            <Col>Item A3</Col>
            <Col>Item B3</Col>
            <Col>Item C3</Col>
            <Col>Item D3</Col>
        </Row>
        <Row>
            <Col>Item A4</Col>
            <Col>Item B4</Col>
            <Col>Item C4</Col>
            <Col>Item D4</Col>
        </Row>
    </Container>
)

export default MyFooter
