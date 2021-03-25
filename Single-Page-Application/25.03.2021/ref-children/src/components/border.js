import React from 'react';

const Border = (props) => {


    console.log(props);

    return (
        <div style={{border: '2px solid blue'}}>
            {props.children}
        </div>
    );
};

export default Border;