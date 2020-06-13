import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import Home from "./views/home";
import Login from "./views/login";

function App() {
    return (
        <div className="App">

            <Router>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/todo">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
