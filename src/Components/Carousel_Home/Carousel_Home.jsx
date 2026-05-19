import { useEffect } from 'react';
import './Carousel_Home_Syle.css'

const Carousel_Home = () => {
  useEffect(() => {
    const myCarouselElement = document.querySelector('#carouselExampleControls');
    if (myCarouselElement) {
      const carousel = new window.bootstrap.Carousel(myCarouselElement, {
        interval: 4000,
        ride: 'carousel',
        pause: false,
      });
      carousel.cycle();
    }
  }, []);
  return (
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/1.png" className="d-block w-100 carousel-image" alt="slide" />
        </div>
        <div className="carousel-item">
          <img src="./images/2.png" className="d-block w-100 carousel-image" alt="slide" />
        </div>
        <div className="carousel-item">
          <img src="./images/3.png" className="d-block w-100 carousel-image" alt="slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel_Home
