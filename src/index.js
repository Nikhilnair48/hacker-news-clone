import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Switch>
            <Route path="/:pageNumber" children={<App />} />
            <Route path="/" children={<App />} />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
