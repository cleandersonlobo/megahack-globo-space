import { combineReducers } from 'redux';
import { reducer as offline } from 'redux-offline-queue';
import login from './Login/LoginReducers';
import favoritos from '../ducks/favoritos';

export default combineReducers({
  offline,
  login,
  favoritos,
});
