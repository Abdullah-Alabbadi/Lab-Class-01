import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
class Main extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          hornsForm: 99
        }
    }
filterImg = (e) => {
  e.preventDefault();
 this.setState({hornsForm : e.target.value}) ;
}
  render() {
    return (
      <main>
         <Form className="form" >
          <Form.Group controlId="select">
            <select
              onChange={(e) => this.filterImg(e)}
              aria-label="Default select example"
            >
              <option>Select Number Of Horns</option>
              <option value="99">All HorndBeast </option>
              <option value="1">One horn</option>
              <option value="2">Two horns</option>
              <option value="3">Three horns </option>
              <option value="100">More</option>
            </select>
          </Form.Group>
        </Form>
        <Row xs={1} md={3} className="g-4">
          {data.map((val, index) => {
            return (
             <> {
               (this.state.hornsForm == val.horns &&
                <HornedBeast
                title={val.title}
                description={val.description}
                image_url={val.image_url}
                horns={val.horns}
                key={index}
              />) || (this.state.hornsForm == 99 &&   <HornedBeast
              title={val.title}
              description={val.description}
              image_url={val.image_url}
              horns={val.horns}
              key={index}
            />
              )}
              </>
            )
          })}
        </Row>
      </main>
    );
  }
}
export default Main;