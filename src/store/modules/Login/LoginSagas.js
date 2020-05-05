import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import { loadFailureLogin, loadSuccessLogin } from './LoginActions';

export function* loadLogin(action) {
  try {
    const response = yield call(api.post, 'user/authenticate', action.payload);
    if (response.data.status === true) {
      yield put(loadSuccessLogin(response.data.data));
    } else {
      yield put(loadFailureLogin());
      Alert.alert('Falha ao logar');
    }
  } catch (error) {
    yield put(loadFailureLogin());
    Alert.alert('Falha ao logar');
  }
}
export default all([takeLatest(ListTypesRequest.LOAD_LOGIN, loadLogin)]);
