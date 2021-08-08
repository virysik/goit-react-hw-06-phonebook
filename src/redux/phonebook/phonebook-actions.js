import types from './phonebook-types'
import { nanoid } from 'nanoid'

export const addContact = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    name,
    number,
    id: nanoid(),
  },
})

export const deleteContact = (id) => ({
  type: types.DELETE_CONTACT,
  payload: id,
})

export const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
})
