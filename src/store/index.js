import { saveStateToStorage, loadStateFromStorage } from "../utils";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { workspace, form, user, app } from "./reducers";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  workspace,
  form,
  user,
  app
});

const stateFromStore = loadStateFromStorage();

const store = createStore(
  reducers,
  stateFromStore,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => saveStateToStorage(store.getState()));

export default store;
