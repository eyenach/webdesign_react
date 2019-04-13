import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import loginApp from './loginApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <loginApp/>,
    document.getElementById('login')
);

serviceWorker.unregister();