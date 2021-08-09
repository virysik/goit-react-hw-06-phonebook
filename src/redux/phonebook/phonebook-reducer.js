import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { addContactFn, deleteContactFn } from './phonebook-reducer-helpers'
import { addContact, deleteContact, changeFilter } from './phonebook-actions'

const items = createReducer([], {
  [addContact]: (state, action) => addContactFn(state, action),
  [deleteContact]: (state, action) => deleteContactFn(state, action),
})

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({ items, filter })
