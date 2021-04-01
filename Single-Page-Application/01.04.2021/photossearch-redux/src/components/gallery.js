import React, { useState } from 'react';
import { Card, Col, Container, Row, Modal, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux'

const Gallery = (props) => {

    const [state, setState] = useState({ show: false, imgUrl: '' })



    const handleClose = () => setState({ show: false, imgUrl: '' });
    const photoPreview = (url) => {
        setState({ show: true, imgUrl: url })
    }

    switch (props.data.status) {
        case 'START':
            return <h1>LOADING......</h1>
        case 'FAILED':
            return <h1>FAILED......</h1>
        case 'SUCCESS':
            return (
                <Container>
                    <Row>
                        {props.data.data.map((element, idx) =>
                            <Col key={idx} lg="4" md="3" sm="1">
                                <Card>
                                    <Card.Img variant="top" src={element.previewURL} />
                                    <Card.Body>
                                        <Card.Title>{element.user}</Card.Title>
                                        <Card.Text>{element.tags}</Card.Text>
                                        <Button onClick={() => photoPreview(element.largeImageURL)} variant="primary">Preview</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )}
                    </Row>
                    <Modal size="lg"   show={state.show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Image fluid  src={state.imgUrl} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </Container>

            )


        default:
            break;
    }
    return (
        <div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.results
    }
}


export default connect(mapStateToProps)(Gallery);