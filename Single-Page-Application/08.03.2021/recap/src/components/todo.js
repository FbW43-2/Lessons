import React from 'react';

class Todo extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            bgColor: 'aqua',
            textColor: 'none'
        }
    }

    // add event for any react element should be done without [()] 
    changeColorBtnClick= () => {
        //alert('hi');
        // can not change the state directly instead you need to use setState() method
        // this.state.bgColor = "red";

        this.setState({
            bgColor: 'red',
            textColor: 'blue'
        });
    }

    render() {
        console.log(this.props);

        // let listElement = [];

        // for(let i = 0; i < this.props.todolist.length; i++) {
        //     const item = 
        //     <div>
        //         <span>{this.props.todolist[i].todo}</span>
        //         <span>{this.props.todolist[i].done ? "done" : "not yet"}</span>
        //     </div>;
        //     listElement.push(item)
        // }
        // usin map to render items
        let listElement = this.props.todolist.map((element, idx) =>
            <div key={idx}>
                <span>{element.todo}</span>
                <span>{element.done ? "done" : "not yet"}</span>
            </div>
        )

        return (
        <div style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>
            {listElement}
            {/* <button onClick={() => {alert('hi')}} >change color</button> */}
            <button onClick={this.changeColorBtnClick} >change color</button>
        </div>
        )
    }
}


export default Todo;