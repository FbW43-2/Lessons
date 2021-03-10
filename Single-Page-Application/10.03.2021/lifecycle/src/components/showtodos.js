import React from 'react';


class ShowToDos extends React.Component {

    doneBtnClick = (index) => {
        console.log(index);
    }
    
    render() {
        return <ul>
            {
                this.props.todos.map((element, idx) => 
                    <li key={idx}>
                        {element}
                        {/* call a method (using event) which require a parameter suppose to be done inside ARROW function */}
                        <button onClick={() => {this.doneBtnClick(idx)}}>done</button>
                    </li>
                    )
            }
        </ul>
    }
}

export default ShowToDos;