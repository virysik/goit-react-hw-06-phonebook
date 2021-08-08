import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadContacts, saveContacts } from '../helpers/localStorage'
import phonebookReducer from './phonebook/phonebook-reducer'
import throttle from 'lodash.throttle'

const rootReducer = combineReducers({ contacts: phonebookReducer })

const preloadedState = {
  contacts: {
    items: loadContacts()?.contacts?.items,
  },
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools())

store.subscribe(
  throttle(() => {
    saveContacts({
      contacts: {
        items: store.getState().contacts.items,
      },
    })
  }, 1000),
)

export default store
