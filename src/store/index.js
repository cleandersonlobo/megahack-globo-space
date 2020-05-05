import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, REHYDRATE } from 'redux-persist';
import { offlineMiddleware, suspendSaga, consumeActionMiddleware } from 'redux-offline-queue';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import reactotron from 'reactotron-react-native';
import rootReducer from './modules/indexReducer';
import rootSaga from './modules/indexSaga';
//
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['offline', 'favoritos'],
};
//
const middlewares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

//
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

middlewares.push(
  offlineMiddleware({
    additionalTriggers: REHYDRATE,
  })
);
//

middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());
//
const enhancer = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancer);

//
if (__DEV__) reactotron.setReduxStore(store);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
