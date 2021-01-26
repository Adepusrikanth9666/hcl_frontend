// import { act } from 'react-dom/test-utils'
import * as actionTypes from '../actions/actionTypes'
import initialState from "./intialState"

export function employeeReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return state.employee
    case actionTypes.CREATE_EMPLOYEE:
      var createNewEmployee = [...state.employee]
      var newEmployeeObj = { id: createNewEmployee.length + 1, employee: action.createNotePayload.employee }
      createNewEmployee.push(newEmployeeObj)
      console.log(createNewEmployee)
      return Object.assign({}, state, {
        employee: createNewEmployee
      })
    case actionTypes.DELETE_EMPLOYEE:
      var deleteEmployee = [...state.employee]
      deleteEmployee = deleteEmployee.filter(employee => (employee._id !== action.deleteEmployeePayload._id))
      return Object.assign({}, state, {
        employee: deleteEmployee
      })
    case actionTypes.STORE_EMPLOYEE:
      var storeEmployee = [...state.employee]
      storeEmployee = action.employee
      return Object.assign({}, state, {
        employee: storeEmployee
      })
    case actionTypes.EDIT_EMPLOYEE:
      var editEmployee = [...state.employee]
      console.log(editEmployee, state.employee, action.editNotePayload)
      editEmployee = editEmployee.map(element => {
        if (element._id === action.editEmployeePayload._id) {
          element.employee = action.editEmployeePayload.employee
        }
      })
      return Object.assign({}, state, {
        employee: editEmployee
      })
    default:
      return state
  }
}

// 