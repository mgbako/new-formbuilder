import { workspace, form, user, app } from "./reducers";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  workspace,
  form,
  user,
  app
});

const store = createStore(reducers);
