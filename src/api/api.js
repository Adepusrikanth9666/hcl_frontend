import * as actions from '../redux/actions/actions'
import fetch from 'cross-fetch'

const apiEndpoint = 'http://localhost:4000'

// create a note

export function createEmployee (createEmployeePayload) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/employee`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createEmployeePayload)
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.createEmployee(json))
    }))
  }
}


export function getEmployee () {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/employee`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.storeEmployee(json))
    }))
  }
}

export function deleteEmployee (employee) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/employee/${employee._id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.deleteEmployee(json))
    }))
  }
}



export function editEmployee (employee) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/employee/${employee._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.editEmployee(json))
    }))
  }
}