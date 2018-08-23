import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'integration/app/app';
import 'bootstrap/dist/css/bootstrap.css';
import { configure } from './redux/store/configure-store';
import './index.css';

const { rootStore, persistor } = configure();

ReactDOM.render(
  <Provider store={rootStore}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
