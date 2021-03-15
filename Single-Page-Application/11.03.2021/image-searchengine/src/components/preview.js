import React from 'react';


class Preview extends React.Component {

    componentWillUnmount = () => {
        console.log('preivew component is going to be deleted from the DOM');
    }
    render() {
        console.log(this.props.photoUrl);
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
