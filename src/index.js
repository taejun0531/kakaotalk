import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { UserStore } from './stores/UserStore';

const userStore = new UserStore();

ReactDOM.render(
  <Provider userStore={userStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);