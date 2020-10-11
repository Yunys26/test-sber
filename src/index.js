
import React from 'react';
import ReactDOM from 'react-dom';
// Libs
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/MainBlock/Main';
// Store
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route exact="/">
          <Main/>
        </Route>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
