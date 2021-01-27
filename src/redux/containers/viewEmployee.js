import { connect } from 'react-redux'
// import * as actions from '../actions/actions'
import * as apis from '../../api/api'
import View_Employee from '../../Components/View_Employee/View_Employee'

const mapPropsToState = (state, ownProps) => {
  return {
    employee: state.employeeReducer.employee
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteEmployee: (deleteEmployeePayload) => { dispatch(apis.deleteEmployee(deleteEmployeePayload)) },
    getEmployee: () => { dispatch(apis.getEmployee()) }
  }
}

const ViewEmployeeContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(View_Employee)

export default ViewEmployeeContainer
