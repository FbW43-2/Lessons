import React from 'react';


const ShowToDos = (props) => {

    return(
        <ul>
            {props.list.map((element, idx) => 
            <li key={idx}>{element}</li>
            )}
        </ul>
    )
}

export default ShowToDos;