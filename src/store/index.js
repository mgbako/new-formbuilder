import { saveStateToStorage, loadStateFromStorage } from "../utils";
import { workspace, form, user, app } from "./reducers";
import { combineReducers, createStore } from "redux";
import { preserveNewForm } from "./actions";

const reducers = combineReducers({
  workspace,
  form,
  user,
  app
});

const stateFromStore = loadStateFromStorage();

const store = createStore(reducers, stateFromStore);

store.subscribe(() => saveStateToStorage(store.getState()));

store.subscribe(() => console.log(store.getState()));

store.dispatch(
  preserveNewForm({
    name: "hello man",
    howIsItGoing: "Getting my mental toughness on"
  })
);

export default store;
