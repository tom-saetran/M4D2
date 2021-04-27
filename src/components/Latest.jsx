import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Jumbotron, Container, Modal, Button } from "react-bootstrap"
import fantasy from "../data/fantasy.json"

class Latest extends React.Component {
    state = {
        modalShow: false,
        currentBook: fantasy[0]
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="pb-3">Latest Releases:</h1>
                        {fantasy.map(book => (
                            <img
                                key={book.asin}
                                className="m-1"
                                src={book.img}
                                alt="Book Cover"
                                height="120px"
                                onClick={() => {
                                    this.setState({ currentBook: { ...book }, modalShow: true })
                                }}
                            />
                        ))}
                    </Container>
                </Jumbotron>

                <LatestModal book={this.state.currentBook} show={this.state.modalShow} onHide={() => this.setState({ modalShow: false })} />
            </>
        )
    }
}

const LatestModal = props => {
    return (
        <Modal {...props} size="lg" aria-labelledby="latestModal" centered>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center" id="latestModal">
                    {props.book.asin}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column">
                <h4 className="text-center">{props.book.title}</h4>
                <img className="img-fluid" src={props.book.img} alt={props.book.asin} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Latest
