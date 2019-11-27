import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import './form.css';
import app from '../Api/index'

class Account extends Component{
  constructor(props){
    super(props)
    this.state={state: true ,username:''}

    this.handlelogout=this.handlelogout.bind(this);
  }

  handlelogout() {
    // app.logout(localStorage.user ,(message)=>{
    //   if(message.state === false){
        localStorage.token= '';
        localStorage.user= '';
        this.setState({state:false})
    //   }
    // })
   
   }
   
  componentDidMount(){
      if(localStorage.user !== ''){
      app.account(localStorage.user,(message)=>{
        console.log(message)
         if(message.state !== true){
          this.setState({state:false})
           
            }else{
              this.setState({username:message.username})
        }
     })
    }else{
      this.setState({state:false})
    }
  }

  componentWillUnmount() {
    this.setState({state: true})
 }

    render(){
        return(
           <div>
               <h1 className="text-success">WellCome Dear {this.state.username}</h1>
               <button type="submit" className=" btn btn-danger" onClick={this.handlelogout}>Logout</button>
               {this.state.state === false ? <Redirect to="/login" /> : '' }
               {/* {this.state.redirection === false ? <Redirect to="/login" /> : "" }  */}
           </div>
        );
    }
}

export default Account;