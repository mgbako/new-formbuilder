import {combineReducers} from 'redux';
import workspaceReducer from './workspaceReducer';

export default combineReducers({
  workspaces: workspaceReducer
})
