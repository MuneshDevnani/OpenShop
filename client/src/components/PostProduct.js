import React, {Component} from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import './form.css';
import app from '../Api/index'

class PostProduct extends Component{
    constructor(props){
        super(props)
        this.state={name:'', price:'',desc:'', productImage:'' ,status: true,redirect: false }
    
        this.handleform=this.handleform.bind(this);
      }
      handleform() {
      app.postproducts(this.state.name, this.state.price,this.state.desc,this.state.productImage,(message) =>{
        if(message.state === false) {
          this.setState({status: false,message: message.message})  
      } else {
          this.setState({status: true,redirect: true})
      }
      })
      }
    render(){
        return(
            <div className="body">
            <div className="container">
            
            <div className="row">
              <div className="col-md-6 col-md-offset-3 area">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Add Your Product Details</strong>
                    {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : '' }
                    {this.state.redirect === true ? <Redirect to="/" /> : "" }  
                  </div>
                  <div className="panel-body">
                    
                      <div className="form-group">
                        <label htmlFor="inputProduct3" className="col-sm-3 col-md-12 control-label text-left">
                          Product Name</label>
                        <div className="col-sm-12 col-md-12">
                          <input type="text" className="form-control" id="inputProduct3" placeholder="ProductName" required required onChange={(e)=> this.setState({name: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPrice3" className="col-sm-3 col-md-12 control-label text-left">
                          Price</label>
                        <div className="col-sm-12 col-md-12">
                          <input type="number" className="form-control" id="inputPrice3" placeholder="Price" required onChange={(e)=> this.setState({price: e.target.value})}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputdesc3" className="col-sm-3 col-md-12 control-label text-left">
                          Description</label>
                        <div className="col-sm-12 col-md-12">
                          <textarea type="number" className="form-control" id="inputdesc3" placeholder="Description" required onChange={(e)=> this.setState({desc: e.target.value})}/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputimage3" className="col-sm-3 col-md-12 control-label text-left">
                          Product Image</label>
                        <div className="col-sm-12 col-md-12">
                          <input type="text" className="form-control" id="inputimage3" placeholder="Image Url here" required onChange={(e)=> this.setState({productImage: e.target.value})}/>
                        </div>
                      </div>                      
                      <div className="form-group last">
                        <div className="col-sm-9">
                          <button type="submit" className="btn btn-success btn-sm " onClick={this.handleform}>
                            Add Product</button>
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
        )
    }
}
export default PostProduct;