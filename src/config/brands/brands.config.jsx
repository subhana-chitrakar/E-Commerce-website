import { Container,Row,Col } from "react-bootstrap";
import HeaderSection from "../../pages/home/component/header.componet";


const Brand = () =>{
  return (
    <>
 <HeaderSection/>
      <Container className="my-5">
        <Row className="my-5">
          <Col>brands</Col>
        </Row>
      </Container>
    </>
  );
}

export default Brand;