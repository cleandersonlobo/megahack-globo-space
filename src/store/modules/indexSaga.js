import { all } from 'redux-saga/effects';
import login from './Login/LoginSagas';

export default function* rootSaga() {
  return yield all([
    login,
    // adicione mais sagas
  ]);
}
