import * as actionTypes from './actionTypes'

export function addingEmployee (addingEmployeeRequest) {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    employee: addingEmployeeRequest
  }
}

export function createEmployee(createEmployeePayload) {
  return {
    type: actionTypes.CREATE_EMPLOYEE,
    createEmployeePayload
  }
}

export function storeEmployee(employee) {
  return {
    type: actionTypes.STORE_EMPLOYEE,
    employee
  }
}

export function deleteEmployee (deleteEmployeePayload) {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    deleteEmployeePayload
  }
}

export function editEmployee (editEmployeePayload) {
  return {
    type: actionTypes.EDIT_EMPLOYEE,
    editEmployeePayload
  }
}
