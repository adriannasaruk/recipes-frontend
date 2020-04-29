import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Utils/store/Reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  root
);
