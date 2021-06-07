import React from 'react';


class HornedBeasts extends React.Component {
    render() {
        return (

            <div className='horn'>

                <h2>{this.props.title} </h2>
                <p>{this.props.description}</p>
                <img src={this.props.url} alt={this.props.alter} />
                <img src={this.props.url} alt={this.props.alter} />
                <img src={this.props.url} alt={this.props.alter} />
            </div>


        );



    }





}

export default HornedBeasts;