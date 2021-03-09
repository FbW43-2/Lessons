import React from 'react';
import ReactDOM from 'react-dom';


import Title from './components/title';




class App extends React.Component {
    // in any class component, it must has a render method
    render() {
        // jsx
        return (
            <>
                <h1 className="redcolor">Hello FBW43-2</h1>
                <Title someprop="I came from the Parent"/>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));