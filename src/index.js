import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import App from "./containers/App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: "PLUS", payload: { num: 10 } });
// store.dispatch({ type: "MINUS", payload: { num: 3 } });
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
