import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./ducks/userDuck";
import messageReducer from "./ducks/messageDuck";
import chatReducer from "./ducks/chatDuck";

export const middleware = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  chat: chatReducer,
});

export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
