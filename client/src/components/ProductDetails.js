import React, { Component } from 'react'
import app from '../Api/index';

class ProductDetails extends Component {
    constructor(props) {
        super(props)

        this.id = this.props.location.search.split("=")[1]
        this.state = { item: [] }

    }
    componentDidMount() {
        app.productdetails(this.id, (items) => {
            this.setState({ item: items.product })
        })
    }
    render(){
        return(
            <div className="container">
            <div className="row">
            {/*Grid column*/}
<div className="col-md-6 mb-4">
  {/*Content*/}
  <div className="p-4">
   
    <p className="lead">
     
      <span>Rs. {this.state.item.price}</span>
    </p>
    <p className="lead font-weight-bold">Description</p>
    <p>{this.state.item.desc}</p>
    <form className="d-flex justify-content-left">
      {/* Default input */}
      <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{width: '100px'}} />
      <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart
        <i className="fas fa-shopping-cart ml-1" />
      </button>
    </form>
  </div>
  {/*Content*/}
</div>
{/*Grid column*/}
{/*Grid row*/}



                <div className="col-md-3" style={{ backgroundColor: '#e3e3e3' }}>
                    {/* Delivery details */}
                    <p>Delivery Options</p>
                    <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                    <i className="fa fa-truck" style={{ paddingRight: '10px' }}></i>
                    Main Autobhan road, Latifabad Hyderabad
                    </p>
                    <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                    <i className="fa fa-money-bill-wave" style={{ paddingRight: '10px' }}></i>
                    Cash on delivery
                    </p>
                    <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                    <i className="fa fa-truck-loading" style={{ paddingRight: '10px' }}></i>
                    Home delivery
                    </p>
                    <p>Return & Warranty</p>
                    <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                    <i class="fas fa-undo" style={{ paddingRight: '10px' }}></i>
                    6 Days Returns
                    </p>
                    <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                    <i class="fas fa-times" style={{ paddingRight: '10px' }}></i>
                    Warranty not available
                    </p>
                </div>
            </div>
        </div>
        )
    }
}
export default ProductDetails; 