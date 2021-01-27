import { connect } from 'react-redux'
// import * as actions from '../actions/actions'
import * as apis from '../../api/api'
import Create_Employee from '../../Components/Create_Employee/Create_Employee'

const mapPropsToState = (state, ownProps) => {
  return {
    employee: state.employeeReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createEmployee: (createEmployeePayload) => { dispatch(apis.createEmployee(createEmployeePayload)) },
    editEmployee: (editEmployeePayload) => { dispatch(apis.editEmployee(editEmployeePayload)) },
  }
}

const EmployeeContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(Create_Employee)

export default EmployeeContainer
// 