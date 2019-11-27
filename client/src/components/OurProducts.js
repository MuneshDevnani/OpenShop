import React, {Component} from 'react';
import { BrowserRouter as  Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import app from '../Api/index'

export default class OurProducts extends Component {
    constructor(props) {
        super(props)

        this.state = { products: [] }
        this.id = ""
        this.handlePurchase = this.handlePurchase.bind(this)
    }
  
    componentDidMount() {
      app.getproducts()
      this.setState({ products: JSON.parse(localStorage.products) })
    }

    handlePurchase(id) {
      this.id = id
      this.setState({}) //This is only to call render() method again
    }

    componentWillUnmount() {
        this.id=""
    }
    render() {
        return (
            <div className="row"> 
            <div className="col-lg-10 col-md-offset-1">
                {this.id !== "" ? <Redirect to={`/product?id=${this.id}`} /> : ""}
                <div className="row" style={{paddingTop: '40px'}}>
              {this.state.products.map(items => {
                        return (
                <div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
                  <div className="card h-100">
                    <Link to="#"><img style={{height:'400px'}} className="card-img-top" src={items.productImage} alt="This is Product " /></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#"> {items.name} </Link>
                      </h4>
                      <h5>{items.price}</h5>
                      {/* <p className="card-text">{items.desc}</p> */}
                    
                    <div className="row" style={{margin:'auto'}}>
                    <div className="col-md-6 col-sm-3">
                      <button className="btn btn-warning"><i className="fas fa-shopping-cart"></i> Add To Cart</button>
                    </div>
                    <div className="col-md-6 col-sm-3">
                      <button className="btn btn-primary" onClick={() => this.handlePurchase(items._id)}><i className="fas fa-info-circle"></i> More Details</button>
                    </div>
                    </div>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">★ ★ ★ ★ ☆</small>
                    </div>
                  </div>
                      
                </div>
              )
            })} 
            </div>
              {/* /.row */}
            </div>
            </div>
        )
    }
}
