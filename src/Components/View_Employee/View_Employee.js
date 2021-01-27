import React,{Component} from 'react'
import axios from 'axios'
import './View_Employee.css'

export default class View_Employee extends Component {

    constructor(props){

        super(props);
        this.state = {


        }
        this.editEmployee = this.editEmployee.bind(this)
        

    }
    editEmployee(employee){

        window.localStorage.setItem('editEmployee', JSON.stringify(employee))
    this.props.history.push('/create')


    }

    componentDidMount () {
        setTimeout(() => this.props.getEmployee(), 1000)
      }
      // 

    render() {
        return(

            <div id='view-employee'>
        <div className='Employee-wrapper'>
          {this.props.employee && this.props.employee.length > 0 && this.props.employee.map((element, index) => {
            return (
              <div key={index}>
                <div className='note-card'>
                  <div>Name :{element ?element.name : ''}</div>
                  <div>Salary :{element ? element.salary : ''}</div>
                  <div>Address:{element ? element.address : ''}</div>
                  <div>{element ? element.value : ''}</div>
                  <div>Permanent Address :{element ? element.permanent : ''}</div>
                </div>
                <div className='btns-container'>
                  <img className='note-btn' src='/Assets/Images/delete.webp' onClick={() => this.props.deleteEmployee(element)} />
                  <img className='note-btn' src='/Assets/Images/edit.png' onClick={() => this.editEmployee(element)} />
                </div>
              </div>
              
            )
          })}
        </div>
      </div>

            
        );
    }


}


// https://www.ag-grid.com/documentation/react/getting-started/?gclid=CjwKCAiA9bmABhBbEiwASb35V95yYm7OZ2MHi-U2-JZOnmUm7hDKqdnX01BoMkHII4whfMz9zT8ZyxoCVWUQAvD_BwE

// https://medium.com/@thewidlarzgroup/react-table-7-sorting-filtering-pagination-and-more-6bc28af104d6


//https://4wn32jky57.csb.app/