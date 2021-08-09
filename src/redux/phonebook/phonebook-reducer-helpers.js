import { GiButterflyWarning } from 'react-icons/gi'
import toast from 'react-hot-toast'

export const addContactFn = (state, { payload }) => {
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
}

export const deleteContactFn = (state, { payload }) =>
  state.filter(({ id }) => id !== payload)
