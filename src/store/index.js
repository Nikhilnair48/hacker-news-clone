import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const loggerMiddleware = createLogger();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
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
  console.log(store);
  // store.dispatch({ type: "GET_PAGE_REQUEST" });
  return store;
};

export default configureStore;
