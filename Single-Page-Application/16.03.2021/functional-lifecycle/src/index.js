// object destructuring
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const initState = {
        val1: '',
        val2: ''
    }
    const [state, setState] = useState(initState);
    useEffect(() =>{
        // same componentDidmount in a class component
        // any code will be written here is going to be called
        // one time after first render
        console.log('after first render one time');

        return () => {
            // any code will be written here is goin to be called 
            // directly before the component is deleted
            console.log('will be called before component is deleted' );
        }

    }, []);
    useEffect(() => {
        // NOT same of componentDidupdate on class component
        // because componentDidupdate is going to be called 
        // only after state changing but not on the first time

        // any code will be written here is going to be called
        // first time after render
        // after each changing on the state
        console.log('first time after render, after each changing on the state');
    });
    useEffect(()=>{
        // any code will be written here is going to be called
        // on the first time after render
        // every time when val1 (inside the state) is changed
        console.log('on the first time after render, every time when val1 (inside the state) is changed');
    }, [state.val1]);

    const btnClick = () => {
        setState({...state, val1: 'any thing'})
    }
    return (
        <>
        <div>lifecycle methods on functional components</div>
        <button onClick={btnClick}>click me</button>
        </>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));