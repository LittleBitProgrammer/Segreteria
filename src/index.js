// import lib
import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
//CSS
import './css/index.css'

//render component
ReactDom.render(<App/>, document.querySelector('#root'));

// register service worker for progressive web app
serviceWorker.register();