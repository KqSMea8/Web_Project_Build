import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import reducers from "../reducers";
import middleware from "../middleware";

const initialState = {};

// applyMiddleware(thunk, middleware)

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
