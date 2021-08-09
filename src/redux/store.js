import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import phonebookReducer from './phonebook/phonebook-reducer'

const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
}

const middleware = []

if (process.env.NODE_ENV === `development`) {
  middleware.push(logger)
}

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, phonebookReducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

export const persistor = persistStore(store)

export default store
