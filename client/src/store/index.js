import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer, messageReducer, groupReducer } from "./ducks";

export const middleware = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  group: groupReducer,
});

export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
