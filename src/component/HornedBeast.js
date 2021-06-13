import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import SelectedBeast from "./SelectedBeast.js";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
      showImg: false
    }
  }
  votes = () => {
    this.setState({ vote:++this.setState.vote });
    this.setState({ showImg: true });
  }
close=() =>{
  this.setState({ showImg: false });
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
            <SelectedBeast
            showImg={this.state.showImg}
            close={this.close}
            title={this.props.title}
            description={this.props.description}
            image_url={this.props.image_url}
            />
          </Card>
        </Col>
    );
  }
}
export default HornedBeast;