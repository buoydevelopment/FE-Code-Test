import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
import { createLogger } from 'redux-logger';
import rootReducer from 'redux/state/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { REHYDRATE_COMPLETE } from 'redux/state/constants';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const hashHistory = createHashHistory();

const middleware = [
  thunk,
  routerMiddleware(hashHistory)
];

const storeCreator = () => createStore(persistedReducer);

let createStoreWithMiddleware = compose(applyMiddleware(...middleware)(storeCreator));

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware =
    compose(composeWithDevTools(applyMiddleware(...middleware))(storeCreator));

  // Configure the logger middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);
}

export const configure = function(initialState) {
  // Create the redux store and add middleware to it
  const rootStore = createStoreWithMiddleware(
    rootReducer,
    initialState
  );

  const persistor = persistStore(rootStore, null, () => {
    rootStore.dispatch((dispatch) => {
      dispatch({
        type: REHYDRATE_COMPLETE,
        response: {}
      });
    });
  });

  // Snippet to allow hot reload to work with reducers
  if (module.hot) {
    module.hot.accept(() => {
      rootStore.replaceReducer(rootReducer);
    });
  }

  return {
    rootStore,
    persistor
  };
};
