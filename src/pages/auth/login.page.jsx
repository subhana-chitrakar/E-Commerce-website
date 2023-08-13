import { Container,Row,Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderSection from "../home/component/header.componet";
import { Formik, useFormik} from "formik";
import * as Yup from  "yup";
// import axios, { AxiosError } from "axios";
// import axiousInstance from "../../config/axios.config";
import AuthService from "./auth.service";
import { toast } from "react-toastify";

const LoginPage = () => {
   const authSvc =new AuthService();
    const loginSchema= Yup.object({
            email:Yup.string().email().required(),
            password:Yup.string().min(8).required()
        })
     
      const navigate = useNavigate();

      const formik = useFormik({
        initialValues:{
          email:null,
          password:null
        },
        validationSchema: loginSchema,
        onSubmit:async(values) =>{
         
          //to do: api call for the submissions
          // let roles = {
          //   role : "seller",
          //   status:"active"
          // };
          // toast.success("Welcome to" + roles.role + "pannel");
          // navigate("/" + roles.role)
           
           
          try{
              let response =  await authSvc.login(values);
              if(response.status){
                  //web storage
                  let formatedData = {
                    id: response.result.data._id,
                    name: response.result.data.name,
                    email: response.result.data.email,
                    role: response.result.data.role,
                  };
                  localStorage.setItem("accessToken",response.result.token.accessToken);
                  localStorage.setItem("refreshtoken",response.result.token.refreshToken);
                  localStorage.setItem("user",JSON.stringify(formatedData))
                  toast.success("Welcome to " + formatedData.role +" Pannel!")
                  navigate("/" + formatedData.role);
                  

              }else{
                toast.error(response.msg)
              }

          }catch(axiousErrorResponse){
            toast.error(axiousErrorResponse.data.msg)
            console.log(axiousErrorResponse)
          }
          
        }
      })
 




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
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="row mb-3 mt-5">
                <Form.Label className="col-sm-3">Email: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    onChange={formik.handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    size="sm"
                  ></Form.Control>

                  <span className="text-danger">{formik.errors?.email}</span>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Password: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    onChange={formik.handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    size="sm"
                  ></Form.Control>
                  <span className="text-danger">{formik.errors?.email}</span>
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
                    <NavLink className="go-to me-4" to="/Register">
                      Create Account
                    </NavLink>
                    <NavLink className="go-to" to="/forget-password">
                      Forgot Password?
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