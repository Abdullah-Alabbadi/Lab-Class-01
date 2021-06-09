import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default class SelectedBeast extends Component {

    render() {
        return (

            <Modal show={this.props.showImg} >
                <Modal.Header >
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Card style={{ width: "18rem" }} className="box">
                    <Card.Img

                        variant="top"
                        src={this.props.image_url}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>

                    </Card.Body>

                </Card></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}> Close  </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}