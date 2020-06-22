import React from 'react';

import './App.css';
import NotFound from "./components/not-found";
import TodoApp from "./views/todo-app";
import Login from "./views/login";

import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={TodoApp}/>
                    <Route path="/todo" component={TodoApp}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
