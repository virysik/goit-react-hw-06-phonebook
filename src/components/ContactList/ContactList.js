import { Ul } from './ContactList.styles'
import { connect } from 'react-redux'
import { deleteContact } from '../../redux/phonebook/phonebook-actions'
import ContactListElement from '../ContactListElement'
import PropTypes from 'prop-types'

function ContactList({ contactsArr, onDelete }) {
  return (
    <Ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <ContactListElement
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
            onDelete={() => onDelete(id)}
          />
        )
      })}
    </Ul>
  )
}

const getFilteredContact = (allItems, filter) => {
  const normalazedFilter = filter.toLowerCase()

  return allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalazedFilter),
  )
}

const makeStateToProps = ({ contacts: { items, filter } }) => ({
  contactsArr: getFilteredContact(items, filter),
})

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
})

export default connect(makeStateToProps, mapDispatchToProps)(ContactList)

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
}
