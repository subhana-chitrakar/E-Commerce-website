import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderSection from "../home/component/header.componet";
import user from "../../assets/images/dummy-person.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "./auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const registerSchema = Yup.object({
    name: Yup.string().min(3).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    role: Yup.string()
      .matches(/seller|customer/)
      .default("customer"),
    password: Yup.string().min(8).max(30).required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password and Confirmed Password does not match"
    ),
    image: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: null,
      email: null,
      password: null,
      role: null,
      image: null,
      confirmPassword: null,
    },

    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        const authSvc = new AuthService();
        //file append
        formData.append("image", values.image, values.image.filename);

        //text data append
        formData.append("name", values.name);
        formData.append("role", values.role);
        formData.append("email", values.email);
        formData.append("password", values.password);

        let response = await authSvc.registration(formData);
        if (response.status) {
          toast.success(
            "Your account has been registered.Please check your email for activation process "
          );
          setLoading(false);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }

      // console.log("registration: " , values)
      // let formData = new FormData()
      // //data bind
      // //object
      // formData.append('image',values.image,values.image.name)
      // formData.append('name',values.name)
      // formData.append("role", values.role);
      // formData.append("email", values.email);
      // formData.append("password", values.password);

      //send =>formData
    },
  });

  return (
    <>
      <HeaderSection />
      <Container className="my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}></Col>
          <h1 className="text-center">Register Page</h1>
          <hr />
        </Row>
        <Container>
          <Row>
            <Col sm={3} className="dummy-user">
              <img
                src={
                  formik.values.image && typeof formik.values.image !== "string"
                    ? URL.createObjectURL(formik.values.image)
                    : user
                }
                alt=""
                className="img img-fluid"
              />
            </Col>

            <Col sm={7} className="register-right">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="row mb-3 mt-5 from-right">
                  <Form.Label className="col-sm-3">Name: </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter your name..."
                      size="sm"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3">
                    Email(Username):{" "}
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter your email..."
                      size="sm"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3">Password: </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter your password..."
                      size="sm"
                    ></Form.Control>
                    <span className="text-danger">
                      {formik.errors?.password}
                    </span>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3">
                    Confirm Password:{" "}
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter your password again..."
                      size="sm"
                    ></Form.Control>
                    <span className="text-danger">
                      {formik.errors?.confirmPassword}
                    </span>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3">Role: </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      name="role"
                      size="sm"
                      onChange={formik.handleChange}
                      required
                    >
                      <option>Select Any One</option>
                      <option value={"seller"}> Seller</option>
                      <option value={"customer"}>Customer</option>
                    </Form.Select>
                    <span className="text-danger">{formik.errors?.role}</span>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3"> Profile Image: </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      size="sm"
                      onChange={(e) => {
                        let file = e.target.files[0];

                        let ext = file.name.split(".").pop();
                        if (
                          [
                            "jpg",
                            "jpeg",
                            "png",
                            "gif",
                            "bmp",
                            "webp",
                            "svg",
                          ].includes(ext.toLowerCase())
                        ) {
                          formik.setValues({
                            ...formik.values,
                            image: file,
                          });
                        } else {
                          formik.setErrors({
                            ...formik.errors,
                            image: "File format not supported",
                          });
                        }
                      }}
                    />

                    <span className="text-danger">{formik.errors?.image}</span>
                  </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Col sm={{ offset: 3, span: 9 }}>
                    <Button
                      variant="danger"
                      type="reset"
                      className="mt-3 me-4"
                      size="sm"
                    >
                      <i className="fa fa-trash"></i> Cancel
                    </Button>
                    <Button
                      variant="success"
                      type="submit"
                      className="mt-3"
                      size="sm"
                    >
                      <i className="fa fa-paper-plane"></i> Sign Up
                    </Button>

                    <p>
                      {" "}
                      <br />
                      Already have an account?
                      <NavLink className="go-to m-2" to="/Login">
                        Sign In
                      </NavLink>
                    </p>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default RegisterPage;
