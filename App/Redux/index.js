import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas";
/* eslint-disable import/no-self-import */
/* eslint-disable global-require */
/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require("./NavigationRedux").reducer,
  cocktailList: require("./CocktailListRedux").reducer,
  cocktailSingle: require("./CocktailSingleRedux").reducer
});

export default () => {
  const { store, sagaMiddleware } = configureStore(reducers, rootSaga);
  let { sagasManager } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
/* eslint-enable import/no-self-import */
/* eslint-enable global-require */
