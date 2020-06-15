import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './App.css';
import TodoApp from "./views/todo-app";
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
                    <Route path="/todo" component={TodoApp}>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
