import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from "./reducers";

//import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(logger, reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
