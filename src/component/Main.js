import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Row from "react-bootstrap/Row";
class Main extends React.Component {
  render() {
    return (
      <main>
        <Row xs={1} md={4} className="g-4">
          {data.map((val, index) => {
            return (
              <HornedBeast
                title={val.title}
                description={val.description}
                image_url={val.image_url}
                key={index}
              />
            )
          })}
        </Row>
      </main>
    );
  }
}
export default Main;