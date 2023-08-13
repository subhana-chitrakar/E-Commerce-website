import { NavLink, useNavigate } from "react-router-dom";
import nouser from "../../assets/images/dummy-person.jpg";
import styled from "@emotion/styled";
import { toast } from "react-toastify";

export const UserImage = styled.img`
  width: 42px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const AdminTopNav = () => {
  const navigate = useNavigate();

  //for logout
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Thankyou for using our system!");
  };
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark admin-nav ">
        <NavLink className="navbar-brand ps-3" to="/admin">
          Admin Pannel
        </NavLink>

        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <UserImage src={nouser} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink onClick={logout} className="dropdown-item" to="/login">
                  Logout
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      </>
  );
};

export const AdminSidebar = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading"></div>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-home"></i>
                </div>
                Web Preview
              </NavLink>
              <div className="sb-sidenav-menu-heading">Core Feature</div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#banner"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-images"></i>
                </div>
                Banner Management
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="banner"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/admin/banner/create">
                    Add Banner
                  </NavLink>
                  <NavLink className="nav-link" to="/admin/banner">
                    List Banner
                  </NavLink>
                </nav>
              </div>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Brand Management
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Categories
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                User Management
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Product Management
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Order Management
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Transaction Management
              </NavLink>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Review Management
              </NavLink>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Subhana Chitrakar
          </div>
        </nav>
      </div>
    </>
  );
};


export const AdminFooter =() =>{
  return(
    <>
     <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Ordinary 2023</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
    

