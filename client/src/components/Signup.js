import React, {Component} from 'react';
import { BrowserRouter as  Router, Route, Link , Switch} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import './form.css';
import app from '../Api/index'

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={username:'',email:'', password:'',confirm:'', status: true,message:'',redirect: false}

    this.handleform=this.handleform.bind(this);
  }
 
  handleform() {
  // app.signup(this.state.email, this.state.password)
  if (this.state.password === this.state.confirm) {
    //Insert fetch() code here
    app.signup( this.state.username,this.state.email, this.state.password,
        (message) => {
          console.log(message)
          if(message.state === false) {
            this.setState({status: false,message: message.message})
            
        } else {
            this.setState({status: true,redirect: true})
        }
        })
    }
  }
    render(){
        return(
            <div className="body">
            <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 area">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Signup</strong>
                    {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
                   {this.state.redirect === true ? <Redirect to="/login" /> : ''}
                  </div>
                  <div className="panel-body">
                  <div className="form-group">
                        <label htmlFor="inputUsername3" className="col-sm-3 control-label">
                        Username</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="inputUsername3" placeholder="Username" required onChange={(e)=> this.setState({username: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-3 control-label">
                          Email</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required onChange={(e)=> this.setState({email: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-3 control-label">
                          Password</label>
                        <div className="col-sm-9"> 
                          <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required onChange={(e)=> this.setState({password: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputConfirm3" className="col-sm-3 control-label">
                        Confirm Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="inputConfirm3" placeholder="Confirm Password" required onChange={(e)=> this.setState({confirm: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                          <div className="checkbox">
                          <label>
                              <input type="checkbox" />
                              Agree Terms and Conditions
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                          <button type="submit" className="btn btn-success btn-sm" onClick={this.handleform}>
                            Sign up</button>
                          <button type="reset" className="btn btn-default btn-sm">
                            Reset</button>
                        </div>
                      </div>
                  </div>
                  <div className="panel-footer">
                    Registered? <Link path="/login">Login here</Link></div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        );
    }
}

export default Signup;