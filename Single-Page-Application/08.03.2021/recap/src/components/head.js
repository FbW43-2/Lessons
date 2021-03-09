import React from 'react';

class Head extends React.Component {
    render() {
        // use passed prop
        console.log(this.props);
        return <h2>{this.props.content}</h2>
    }
}

export default Head;