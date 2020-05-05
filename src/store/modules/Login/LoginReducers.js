import { ListTypesRequest } from '../../../config/types';

const INITIAL_STATE = {
  loading: false,
  isLogged: false,
  isRead: false,
  error: false,
  result: [],
};
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ListTypesRequest.LOAD_LOGIN:
      return { ...state, loading: true, isRead: true };
    case ListTypesRequest.LOAD_SUCCESS_LOGIN:
      return {
        ...state,
        result: action.payload.data,
        isRead: false,
        message: 'Logado com sucesso',
        token: action.payload.data.token,
        error: false,
        loading: false,
        isLogged: true,
      };
    case ListTypesRequest.LOAD_FAILURE_LOGIN:
      return {
        ...state,
        loading: false,
        message: 'Erro no login',
        isRead: false,
        error: true,
        isLogged: false,
      };
    default:
      return state;
  }
}
