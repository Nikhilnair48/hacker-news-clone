import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootSaga from "../sagas";
import * as atypes from "../constants/actionTypes";

const loggerMiddleware = createLogger();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(loggerMiddleware, sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(loggerMiddleware, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store, {}, () => {
    store.dispatch({
      type: atypes.REHYDRATION_COMPLETE,
      payload: {}
    });
  });

  return { store, persistor };
};

export default configureStore;
