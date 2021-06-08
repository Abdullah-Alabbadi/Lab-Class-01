import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardColums from 'react-bootstrap/CardColums';

import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    }
  }
  votes = () => {
    let x = this.state.vote;
    x++;
    this.setState({ vote: x });
  }
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }} className="box">
          <Card.Img
            onClick={this.votes}
            variant="top"
            src={this.props.image_url}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text> &#10084;&#65039;{this.state.vote}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default HornedBeast;