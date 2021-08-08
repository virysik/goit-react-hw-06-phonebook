export const loadContacts = () => {
  try {
    const serializedContacts = window.localStorage.getItem('contacts')
    if (serializedContacts === null) {
      return undefined
    }
    return JSON.parse(serializedContacts)
  } catch (err) {
    return undefined
  }
}

export const saveContacts = (state) => {
  try {
    const serializedContacts = JSON.stringify(state)
    window.localStorage.setItem('contacts', serializedContacts)
  } catch {
    //
  }
}
