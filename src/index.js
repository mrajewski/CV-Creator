import React from 'react';
import "./App.scss"
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./components/App";
import {createStore, compose, combineReducers} from "redux";
import resumeReducers from "./reducers"
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    resume: resumeReducers,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers() );


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);