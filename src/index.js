import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, browserHistory} from "react-router";
import * as serviceWorker from './serviceWorker';
import loginApp from "./loginApp";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/home" component={App}/>
        <Route path="/login" component={loginApp} />
    </Router>, document.getElementById('root')
);

serviceWorker.unregister();
