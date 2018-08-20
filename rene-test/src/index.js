import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
