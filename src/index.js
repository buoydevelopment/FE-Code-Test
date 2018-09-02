import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import './index.css';
import AppContainer from './AppContainer';
import DrinkDetailContainer from './components/drink-detail/container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={AppContainer} />
                <Route path="/:drinkId" component={DrinkDetailContainer} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
