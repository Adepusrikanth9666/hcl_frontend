import React,{Component} from 'react'
import axios from 'axios'
import Login from '../Login/Login'
import { Button, Form , Radio, TextArea} from 'semantic-ui-react'
import "./Create_Employee.css"
import View_Employee from '../View_Employee/View_Employee';
// import Header from '../Header/Header'



export default class Create_Employee extends Component {

    constructor(props){

        super(props);
        this.state = {

            name:"",
            salary:"",
            address:"",
            value:"",
            permanent:"",
            valid:false,
            isEdit:false

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    handleChange(e){
        // console.log(e.target.name,e.target.value);
        console.log(this.state.value);
        this.setState({[e.target.name]:e.target.value});
        
    }
    validate(){

        const {name,salary,address,value,permanent} = this.state;
        if(value==='No'){
            if(!name||!salary||!address||!value||!permanent) {


                window.alert("*Please enter the mandatory fields");
                return
    
            }

        }else{
            if(!name||!salary||!address||!value) {


                window.alert("*Please enter the mandatory fields");
                return
    
            }
        }
        

        
        return true

    }

    handleSubmit(event){

        event.preventDefault();

        

        
        if(this.validate()){
            this.setState({valid:true})

            if (this.state.isEdit) {
                const editEmployee = JSON.parse(window.localStorage.getItem('editEmployee'))
                const editEmployeePayload = {
                  _id: editEmployee._id,
                  name: this.state.name,
                  salary:this.state.salary,
                  address:this.state.address,
                  value:this.state.value,
                  permanent:this.state.permanent

                }
                this.props.editEmployee(editEmployeePayload)
            } 
            else {
                const createEmployeePayload = {
                    name: this.state.name,
                    salary:this.state.salary,
                    address:this.state.address,
                    value:this.state.value,
                    permanent:this.state.permanent,
                    valid:this.state.valid,
                    isEdit:this.state.isEdit,
                }
                this.props.createEmployee(createEmployeePayload)

            }
            this.setState({ name: '',salary: '' , address: '', value: '', permanent: '',valid: false,  isEdit: false})
           
            this.props.history.push('/view')
        }


       

        console.log("this is submitted form");
        
    }
    componentDidMount () {
        const editEmployee = JSON.parse(window.localStorage.getItem('editEmployee'))
        if (editEmployee) {
          this.setState({ name: editEmployee.name,salary:editEmployee.salary, address:editEmployee.address, value:editEmployee.value,permanent:editEmployee.permanent,valid:editEmployee.valid,isEdit: true })
        }
         this.setState({ name: '',salary: '' , address: '', value: '', permanent: '',valid: false,  isEdit: false})
      }

    render() {
        console.log(this.state.name)
        return(

            <div className="login">
            <div className="transbox">
                <div><h3>{this.state.message}</h3></div>
                <div><h1>Create Employee</h1></div>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input type="text" name = "name"  maxLength = "20" placeholder='Name' value={this.state.name} onChange={this.handleChange}  />
                    </Form.Field>
                    <Form.Field>
                        <label>Salary</label>
                        <input type="number"  name="salary"  placeholder='Salary' value={this.state.salary} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        {/* <input type="text"  name="address"  placeholder='Address' value={this.state.address} onChange={this.handleChange} /> */}
                        <TextArea  name="address"  placeholder='Address' value={this.state.address} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        Is permanent: <b>{this.state.value}</b>
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label='Yes'
                            name='value'
                            value='Yes'
                            checked={this.state.value === 'Yes'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='No'
                            name='value'
                            value='No'
                            checked={this.state.value === 'No'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    {this.state.value==='No' &&  <Form.Field>
                        <label>Permanent Address</label>
                        {/* <input type="text"  name="permanent"  placeholder='permanent' value={this.state.permanent} onChange={this.handleChange} /> */}
                        <TextArea  name="permanent"  placeholder='permanent Address' value={this.state.permanent} onChange={this.handleChange} />
                    </Form.Field>}
                    <Button type='submit'  onClick={this.handleSubmit} >{this.state.isEdit ? 'Edit Employee' : 'Add Employee'}</Button>
                </Form>
               
                

            </div>
            {this.state.valid?<View_Employee />:""}
        </div>

            
        );
    }


}