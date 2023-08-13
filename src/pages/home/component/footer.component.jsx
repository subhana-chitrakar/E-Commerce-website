import { Container,Row,Col } from "react-bootstrap";


const Footer =()=>{
  return (
    <>
      <Container fluid className="footer-section">
        <Row>
          <Col className=" f-text col-2">
            <h4>Contact Us</h4>
            <div className="contact-lists">
              <ul>
                <li>
                  <a href="#">Customer Care</a>
                </li>
                <li>
                  <a href="#">Return and Refund Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Raise a ticket</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className=" f-text1 col-2">
            <h4>Dhukuti</h4>
            <div className="contact-lists">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Advertise on @ Dhukuti</a>
                </li>
                <li>
                  <a href="#">Sell on @ Dhukuti</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className=" f-text2 col-3">
            <h4 >Why Choose Us?</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo fugiat quis! Alias inventore, ullam saepe ad, aperiam tempora pariatur iusto corrupti ea delectus quia, expedita dicta id eos iure... <a href="">Read More</a> </p>
          </Col>
          <div className="connect">
            <p>Connect with us : </p>
            <div className="connect-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-square-instagram insta"></i>
              <i className="fa-solid fa-envelope email"></i>
            </div>
            <p className="connect-1">Dhukuti Pvt.Ltd. Kathmandu,Nepal</p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;