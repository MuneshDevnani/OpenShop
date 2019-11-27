import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import PostProduct from './components/PostProduct';
import Account from './components/Account';
import OurProducts from './components/OurProducts';
import ProductDetails from './components/ProductDetails';

class App extends Component {

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <strong> <Link className="navbar-brand text-danger"  to="/">OpenShop</Link></strong>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/"><i className="fa fa-home"></i>  Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup"><i className="fas fa-user-plus"></i> Signup</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login"><i className="fa fa-user"></i> Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ourproducts"><i className="fas fa-store-alt"></i> Our Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact"><i className="fas fa-address-book"></i> Contact Us</Link>
      </li>
    </ul>
    <span className="pull-right">    <form className="form-inline my-2 my-lg-0" >
      <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
      </button>
      {/* <div>
        <i className="fas fa-shopping-cart" style={{color:'orange',marginLeft:'10px',fontSize:'20pt'}}></i>
        <span className="cartno"> 0 </span>
      </div> */}
      </form>
      </span>
      </div>
</nav>
       <Switch>
         <Route path="/" exact  component={Home} />
         <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login} />
         <Route path="/postproduct" component={PostProduct} />
         <Route path="/ourproducts" component={OurProducts} />
         <Route path="/account" component={Account} />
         <Route path="/contact" component={Contact} />
         <Route path="/product" component={ProductDetails} />
       </Switch>
       {/* Footer */}
<footer className="page-footer font-small text-dark bg-light pt-4" style={{opacity: '0.9',backgroundcolor: '#fff',marginTop:'40px'}}>
  {/* Footer Elements */}
  <div className="container">
    {/* Social buttons */}
    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <Link className="btn-floating btn-fb mx-1" to="#">
          <i className="fab fa-facebook-f"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-tw mx-1" to="#">
          <i className="fab fa-twitter"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-gplus mx-1" to="#">
          <i className="fab fa-google-plus-g"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-li mx-1" to="#">
          <i className="fab fa-linkedin-in"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-dribbble mx-1" to="#">
          <i className="fab fa-dribbble"> </i>
        </Link>
      </li>
    </ul>
    {/* Social buttons */}
  </div>
  {/* Footer Elements */}
  {/* Copyright */}
  <div className="footer-copyright text-center py-3">Copyright &copy; All rights reserved:
    <Link to="/" className="text-primary"> Openshop.com</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

     </Router>
    )
  }
}

export default App;
