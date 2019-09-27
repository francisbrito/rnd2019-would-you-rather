import {
  createStore as createRootStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';

import scoreboardReducer from './scoreboardReducer';
import topPlayersReducer from './topPlayersReducer';
import latestPollsReducer from './latestPollsReducer';
import pollsReducer from './pollsReducer';
import authenticationReducer from './authenticationReducer';
import answersReducer from './answersReducer';
import pageReducer from './pageReducer';

import rootSaga from '../sagas';

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'would-you-rather',
    storage
  };

  const store = createRootStore(
    persistReducer(
      persistConfig,
      combineReducers({
        scoreboard: scoreboardReducer,
        topPlayers: topPlayersReducer,
        polls: pollsReducer,
        latestPolls: latestPollsReducer,
        authentication: authenticationReducer,
        answers: answersReducer,
        page: pageReducer
      })
    ),
    compose(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(createLogger())
    )
  );

  sagaMiddleware.run(rootSaga);

  return { store, persistor: persistStore(store) };
};
