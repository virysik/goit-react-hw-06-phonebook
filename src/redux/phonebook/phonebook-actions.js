import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const addContact = createAction(
  'phonebook/addContact',
  ({ name, number }) => ({
    payload: {
      name,
      number,
      id: nanoid(),
    },
  }),
)

export const deleteContact = createAction('phonebook/deleteContact')
export const changeFilter = createAction('phonebook/changeFilter')
