import React, {Component} from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import { Redirect} from "react-router-dom";
import './form.css';
import app from '../Api/index'

class Login extends Component{
  constructor(props){
    super(props)
    this.state={email:'', password:'',status: true,redirect: false }

    this.handleform=this.handleform.bind(this);
  }
  handleform() {
  app.login(this.state.email, this.state.password,(message) => {
    if(message.state === false) {
        this.setState({status: false,message: message.message})  
    } else {
      localStorage.user=(this.state.email)
        localStorage.token=(message.token)
        this.setState({status: true,redirect: true})  
    }
    })
  }

    render(){
        return(
            <div className="body">
            <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4 area">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Login</strong>
                    {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : '' }
                    {localStorage.user !== '' ? <Redirect to="/account" /> : "" }
                  </div>
                  <div className="panel-body">
                    
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
                        <div className="col-sm-offset-3 col-sm-9">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" />
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                          <button type="submit" className="btn btn-success btn-sm" onClick={this.handleform}>
                            Sign in</button>
                          <button type="reset" className="btn btn-default btn-sm">
                            Reset</button>
                        </div>
                      </div>
                    
                  </div>
                  <div className="panel-footer">
                    Not Registered? <Link to="/signup">Register here</Link></div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        );
    }
}

export default Login;