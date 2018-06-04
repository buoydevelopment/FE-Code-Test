import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Services from './services/index';
import { baseUrl } from './config';

const services = new Services(baseUrl);

ReactDOM.render(<App services={services} />, document.getElementById('root'));
registerServiceWorker();
