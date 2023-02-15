import React from 'react';

const Carosal = () => {
  return (
    <>
    <div id="carouselExampleControls"  className="carousel slide" data-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img  style={{width:'100vh',height:'60vh'}} className="d-block w-100" src="./images/car5.webp" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img  style={{width:'100vh',height:'60vh'}} className="d-block w-100" src="./images/car2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img  style={{width:'100vh',height:'60vh'}} className="d-block w-100" src="./images/car3.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      
    </>
  );
}

export default Carosal;
