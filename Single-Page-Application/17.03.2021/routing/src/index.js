import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import About from './components/about';
import Services from './components/services';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            
            <div>introduction to react router dom</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/services">services</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/services"><Services /></Route>
                
            </Switch>
            

        </Router>

        // footer

    )
}


ReactDOM.render(<App />, document.getElementById('root'));