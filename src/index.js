import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import loginApp from "./loginApp";
import registerApp from "./registerApp";
import {Router, Route, browserHistory} from "react-router";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/home" component={App}/>
        <Route path="/login" component={loginApp} />
        <Route path="/register" component={registerApp} />
    </Router>, document.getElementById('root')
);

serviceWorker.unregister();
