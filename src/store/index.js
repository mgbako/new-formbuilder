import { saveStateToStorage, loadStateFromStorage } from "../utils";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { response, workspace, form, user, app } from "./reducers";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  workspace,
  response,
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
store.subscribe(() => console.log(store.getState()));

export default store;
