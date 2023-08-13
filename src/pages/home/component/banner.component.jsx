import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import banner4 from "../../../assets/images/banner4.jpg";


const BannerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider autoplay={true} autoplaySpeed={2000} {...settings} className="banner">
      <div>
        <h3>
          <img className="img img-fluid" src={banner1} />
        </h3>
      </div>
      <div>
        <h3>
          <img className="img img-fluid" src={banner2} />
        </h3>
      </div>
      <div>
        <h3>
          <img className="img img-fluid" src={banner3} />
        </h3>
      </div>
      <div>
        <h3>
          <img className="img img-fluid" src={banner4} />
        </h3>
      </div>
    </Slider>
  );
};

export default BannerSection;