import React, {Component} from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import OurProducts from './OurProducts';


class Home extends Component{
  render(){
      return(
      <div>
          <div className="container">
          
          <div className="row">
            {/* /.col-lg-3 */}
            <div className="col-lg-12">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{height: '400px'}}>
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} />
      <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    {/* Wrapper for slides */}
    <div className="carousel-inner">
      <div className="item active">
        <img src={img1} alt="Los Angeles" style={{width: '100%',height: '400px'}} />
      </div>
      <div className="item">
        <img src={img2} alt="Chicago" style={{width: '100%',height: '400px'}} />
      </div>
      <div className="item">
        <img src={img3} alt="New york" style={{width: '100%',height: '400px'}} />
      </div>
      
    </div>
    {/* Left and right controls */}
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel"  role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
              </div>
              
              <OurProducts/>
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
       </div>
      )
  }
}
export default Home;