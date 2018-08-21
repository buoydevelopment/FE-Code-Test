import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { store } from './redux/store';
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
