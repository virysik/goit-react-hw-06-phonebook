import { combineReducers } from 'redux'
import { GiButterflyWarning } from 'react-icons/gi'
import toast from 'react-hot-toast'
import types from './phonebook-types'

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const normalizedName = payload.name.toLowerCase()
      const contactExists = state.find(
        ({ name }) => name.toLowerCase() === normalizedName,
      )

      if (contactExists) {
        toast(`${payload.name} is already in contacts`, {
          style: { color: '#456173' },
          icon: <GiButterflyWarning />,
        })
        return state
      }

      return [payload, ...state]

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload)

    default:
      return state
  }
}
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload

    default:
      return state
  }
}

export default combineReducers({ items, filter })
