import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import lays from "../../../assets/images/lays.jpg";
import laptop from "../../../assets/images/laptop.jpg";
import phone from "../../../assets/images/phone.jpg";
import vodka from "../../../assets/images/vodka.jpg";
import nintendo from "../../../assets/images/nintendo.jpg";
import motorola from "../../../assets/images/motorola.jpg";

import { Container } from "react-bootstrap";

const Advertisement = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
  return (
    <>
      <Container>
        <div className="advertise-section">
          <Slider autoplay={true} autoplaySpeed={4000} {...settings}>
            <div>
              <img src={lays} alt="" />
            </div>
            <div>
              <img src={laptop} alt="" />
            </div>
            <div>
              <img src={phone} alt="" />
            </div>
            <div>
              <img src={vodka} alt="" />
            </div>
            <div>
              <img src={nintendo} alt="" />
            </div>
            <div>
              <img src={motorola} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Advertisement;
