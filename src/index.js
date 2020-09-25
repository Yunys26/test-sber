import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
      {/* <App/> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
