import React from 'react';
import ReactDOM from 'react-dom';
// Libs
import { Provider } from 'react-redux';
// Store
import { store } from './store/store';
// Components
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
    {/* Подключение хранилища */}
    <Provider store={store}>
      <Main/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
