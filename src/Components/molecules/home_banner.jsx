import Carousel from 'react-bootstrap/Carousel';
import Homebanner1 from '../Assets/img/Home_banner_1.jpg';
import Homebanner2 from '../Assets/img/Home_banner_2.jpg';
import Homebanner3 from '../Assets/img/Home_banner_3.png';
import './home_banner.css';
function Homebanner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homebanner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homebanner3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homebanner2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Homebanner;