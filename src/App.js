import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Create_Employee from './Components/Create_Employee/Create_Employee'
// import SignIn from './components/SignIn/SingIn'
// import SignUp from './components/SignUp/SignUp'
// import News from './components/Dashboard/App1'
import Login from './Components/Login/Login'
// import View_Employee from './Components/View_Employee/View_Employee'

import createEmployee from './redux/containers/createEmployee'
import viewEmployee from './redux/containers/viewEmployee'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/create' component={createEmployee} />
          <Route exact path='/view' component={viewEmployee} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
