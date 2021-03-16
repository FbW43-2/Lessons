import React from 'react';


const Preview = (props) => {

    // componentWillUnmount = () => {
    //     console.log('preivew component is going to be deleted from the DOM');
    // }
    // render() {
        console.log(props.photoUrl);
        return(
            <div className="container">
                <div className="row">
                    <img src={props.photoUrl} />
                </div>
            </div>
        )
    // }
}


export default Preview;
