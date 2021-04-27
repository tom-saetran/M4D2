import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Jumbotron, Container, Modal, Button } from "react-bootstrap"
import fantasy from "../data/fantasy.json"

const Latest = () => {
    const [modalShow, setModalShow] = React.useState(false)

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1 className="pb-3">Latest Releases:</h1>
                    {fantasy.map(book => (
                        <img
                            key={book.asin}
                            className="m-1"
                            src={book.img}
                            alt="Book Cover"
                            height="120px"
                            onClick={() => {
                                setModalShow(true)
                            }}
                        />
                    ))}
                </Container>
            </Jumbotron>

            <LatestModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

const LatestModal = props => {
    return (
        <Modal {...props} size="lg" aria-labelledby="latestModal" centered>
            <Modal.Header closeButton>
                <Modal.Title id="latestModal">{props.asin}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.title}</h4>
                <img fluid src={props.img} alt={props.asin} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Latest
