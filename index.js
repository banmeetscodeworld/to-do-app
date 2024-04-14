import { combineReducers } from 'redux';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
