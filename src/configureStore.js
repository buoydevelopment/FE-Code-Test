import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "react-router-redux";
import rootReducer from './reducers';
import rootSagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history) {
    
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
   

    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(rootSagas);

    store.runSaga = sagaMiddleware.run;

    return store;
}