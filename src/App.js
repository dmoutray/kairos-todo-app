import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './App.css';
import Home from "./views/home";
import Login from "./views/login";

function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/" component={Login}>
                    </Route>
                    <Route path="/login" component={Login}>
                    </Route>
                    <Route path="/todo" component={Home}>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
