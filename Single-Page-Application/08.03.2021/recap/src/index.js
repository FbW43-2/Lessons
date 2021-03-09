import React from 'react';
import ReactDOM from 'react-dom';

import Head from './components/head';
import './css/Main.css';


class App extends React.Component {
    render() {

        let x = 5; 
        // jsx
        return (
            <div>
                <h1 className="border" >Hello React</h1>
                <Head someNumber={x} content="content from parent" />
                <Head someNumber={x} content="another content from parent" />
                <Head />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));