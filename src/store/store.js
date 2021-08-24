import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import favoritesReducer from './favoritesReducer';
import queryIndexReducer from './queryIndexReducer';
import queryReducer from './queryReducer';
import tracksReducer from './tracksReducer';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  favorites: favoritesReducer,
  query: queryReducer,
  queryIndex: queryIndexReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    blacklist: ['tracks', 'query', 'queryIndex'],
  },
  rootReducer
);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistedStore = persistStore(store);
