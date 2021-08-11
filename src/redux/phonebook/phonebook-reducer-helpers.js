export const addContactFn = (state, { payload }) => {
  return [payload, ...state]
}

export const deleteContactFn = (state, { payload }) =>
  state.filter(({ id }) => id !== payload)
