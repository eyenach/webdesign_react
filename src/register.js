import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import registerApp from './registerApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <registerApp/>,
    document.getElementById('register')
);

serviceWorker.unregister();