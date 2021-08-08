import { connect } from 'react-redux'
import { Label, Input } from './Filter.styles'
import { changeFilter } from '../../redux/phonebook/phonebook-actions'
import PropTypes from 'prop-types'

function Filter({ onChange }) {
  return (
    <Label>
      Find contacts by name:
      <Input onChange={onChange} type="text" name="filter"></Input>
    </Label>
  )
}

const makeDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
})

export default connect(null, makeDispatchToProps)(Filter)

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
