import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';

const App = () => {
    return (
        <Router>
            <PageHeader />



            <Switch>
                <Route exact path="/"><Home /></Route>
            </Switch>

        </ Router >
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
