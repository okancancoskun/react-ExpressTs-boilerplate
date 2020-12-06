import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { postReducer, addPostReducer, postDetailReducer, registerReducer, loginReducer } from "./reducers"
import logger from "redux-logger";
import reduxPromise from "redux-promise-middleware"


const rootReducer = combineReducers({
  posts: postReducer,
  newPost: addPostReducer,
  post: postDetailReducer,
  newUser: registerReducer,
  auth: loginReducer
});
const allEnhancers = composeWithDevTools(applyMiddleware(thunk, logger))
const store = createStore(
  rootReducer,
  allEnhancers
);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


reportWebVitals();
