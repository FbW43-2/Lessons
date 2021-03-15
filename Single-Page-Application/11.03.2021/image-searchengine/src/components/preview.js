import React from 'react';


class Preview extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <img src={this.props.photoUrl} />
                </div>
            </div>
        )
    }
}


export default Preview;
