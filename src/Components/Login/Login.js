import React,{Component} from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'

export default class Login extends Component {

    constructor(props){

        super();
        this.state = {

            user_name:"",
            password:"",
            message:"",


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    handleChange(e){
        
        console.log(e.target.name,e.target.value);
        this.setState({[e.target.name]:e.target.value});
    }
    validate(){

        const {user_name,password} = this.state;
        if(!user_name||!password) {

            window.alert("*Please enter the mandatory fields");
            return

        }  
        const re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        const isOk = re.test(password);

        console.log(isOk);

        if(!isOk) {
            return alert('WEAK_PASSWORD!:Password must contain 8 characters capital,small,numbers& special characters');
        }


        
    
        
      

        return true

    }

    handleSubmit(event){

        const {user_name,password} = this.state;

        console.log(user_name,password);
        if(this.validate()){

            this.props.history.push('/create');

            axios.post('http://localhost:4000/login', {
                name:user_name,
                password
            })
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                window.localStorage.setItem('login', JSON.stringify(response.data))
            
                }
            })
            .catch((error) => {
                if(error.response.status===400){
                    this.setState({message:"User account does not exist"});
                    console.log(this.state.message);
                    
                }
                
                console.log(error.response.status)
            });

            console.log("this is submitted form");
        }
    }

    // 



    render() {
        return(

            <div className="login">
                <div className="transbox">
                    <div><h3>{this.state.message}</h3></div>
                    <div><h1>Sign In</h1></div>
                    <Form>
                        <Form.Field>
                            <label>User Name</label>
                            <input type="text" name = "user_name" placeholder='User Name' value={this.state.user_name} onChange={this.handleChange}  />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password"  name="password"  placeholder='password' value={this.state.password} onChange={this.handleChange} />
                           
                        </Form.Field>
                            <Button type='submit' color="blue" onClick={this.handleSubmit} >Submit</Button>
                    </Form>
                   
                    

                </div>
            </div>
        );
    }


}