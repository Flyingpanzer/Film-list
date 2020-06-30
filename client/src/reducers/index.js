import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { filmReducer } from './filmReducer';

export default combineReducers({
  filmState: filmReducer,
  routing,
});
