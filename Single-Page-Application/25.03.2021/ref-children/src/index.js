import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Border from './components/border';

const App = () => {

    // hook useRef to access dom elements
    const divRef = useRef(); 

    const btnClick = () => {
        //alert('hi');
        // access dom element using useRef
        console.log(divRef.current);
        divRef.current.style = 'background-color: red; border: 1px solid black; ';
        console.log(divRef.current.childNodes[0]);
        divRef.current.childNodes[0].style = 'width: 200px';
    }
    return (
        <div ref={divRef}>
            <button onClick={btnClick}>click me</button>
            <Border>
                <h1>any element here is going to be bordered</h1>
            </Border>

            <Border>
                <p>this is text</p>
            </Border>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));