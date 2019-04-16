import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import menuApp from './menuApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <menuApp/>,
    document.getElementById('menu')
);

serviceWorker.unregister();