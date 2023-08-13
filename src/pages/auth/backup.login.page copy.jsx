import { Container,Row,Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderSection from "../home/component/header.componet";


const LoginPage = () => {
    
  return (
    <>
      <HeaderSection />

      <Container className="my-5 login-page">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}></Col>
          <h1 className="text-center">Sign In</h1>
          <hr />
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={Formik.handleSubmit}>
              <Form.Group className="row mb-3 mt-5">
                <Form.Label className="col-sm-3">Email: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    onChange={handleChange}
                    defaultValue={credentials?.email}
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    size="sm"
                  ></Form.Control>

                  <span className="text-danger">{Formik.errors?.email}</span>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Password: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    onChange={Formik.handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    size="sm"
                  ></Form.Control>
                  <span className="text-danger">{Formik.errors?.email}</span>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3">
                <Col sm={{ offset: 3, span: 9 }}>
                  <Button variant="danger" type="reset" className="me-4 mt-3">
                    <i className="fa fa-trash"></i> Cancel
                  </Button>
                  <Button variant="success" type="submit" className="mt-3">
                    <i className="fa fa-paper-plane"></i> Login
                  </Button>
                  <p>
                    <br />
                    <NavLink className="go-to" to="/Register">
                      Create Account
                    </NavLink>
                  </p>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;