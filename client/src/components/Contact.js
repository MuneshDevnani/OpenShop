import React, {Component} from 'react';
import { BrowserRouter as Redirect} from "react-router-dom";
import './form.css';
import app from '../Api/index'

class Contact extends Component{
  constructor(props){
    super(props)
    this.state={name:'', email:'', subject:'', message: '',status: false}

    this.handleform=this.handleform.bind(this);
  }
  handleform() {
  app.contact(this.state.name,this.state.email,this.state.subject, this.state.message,(message) => {
    if(message.state === true) {
      this.setState({status: true,message: message.message})   
  } 
    })
  }
  render(){
    return(
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-6 area">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                   </div>
                    <div className="panel-body">
                     <div className="form-group">
                      <label htmlFor="inputname3" className="col-sm-3 col-md-12 control-label text-left">
                        Name</label>
                        <div className="col-sm-9 col-md-12">
                          <input type="text" className="form-control" id="inputname3" placeholder="Name" required onChange={(e)=> this.setState({name: e.target.value})}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-md-12 control-label text-left">
                        Email</label>
                      <div className="col-sm-9 col-md-12">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required onChange={(e)=> this.setState({email: e.target.value})}/>
                    </div>
                  </div>
                    <div className="form-group">
                      <label htmlFor="inputSubject3" className="col-sm-3 col-md-12 control-label text-left">
                      Subject</label>
                      <div className="col-sm-9 col-md-12">
                        <input type="text" className="form-control" id="inputSubject3" placeholder="Subject" required onChange={(e)=> this.setState({subject: e.target.value})}/>
                   </div>
                 </div>
                   <div className="form-group">
                     <label htmlFor="inputMessage3" className="col-sm-3 col-md-12 control-label text-left">
                       Message</label>
                      <div className="col-sm-9 col-md-12">
                        <textarea type="text" className="form-control" id="inputMessage3" placeholder="Message" required onChange={(e)=> this.setState({message: e.target.value})}/>
                    </div>
                   </div>
                   <div className="form-group last">
                     <div className="col-sm-offset-4 col-sm-9">
                     <button type="submit" className="btn btn-success btn-sm" style={{width: '30%', marginTop:'10px'}} onClick={this.handleform}>
                      Send</button>
                  </div>
                    </div>
                  </div>
              <div className="panel-footer">
                {this.state.status === true ? <div className="alert alert-success" role="alert">{this.state.message}</div> : <Redirect to="/" />}
              </div>
             </div>
          </div>
        </div>
      </div> 
    </div>
        );
    }
}


export default Contact;