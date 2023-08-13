import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage1 from "../pages";
import Brand from "./brands/brands.config";
import Product from "./products/products.config";
import HomePageLayout from "../pages/home/layouts/home.layout";
import AdminLayoutPage from "../pages/home/layouts/admin.layout";
import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";
import CategoryDetails from "../pages/category/category.page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CheckPermission from "./rbac.config";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../pages/home/component/error";
import ActivateUser from "../pages/auth/activate-user.page";
import ForgetPassword from "../pages/auth/forget-password/forget-password.page";
import SetPassword from "../pages/auth/set-new-password/setpassword.page";
import AdminDashboard from "../pages/admin/dashboard.page";
import Banner from "../pages/admin/banner";
import AdminLayout from "../pages/home/layouts/admin.layout";

const RoutingSection = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<HomePage1/>} />
            <Route path="brands" element={<Brand />} />
            <Route path="products" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="category/:slug" element={<CategoryDetails />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="/activate/:token" element={<ActivateUser />} />
          <Route path="/set-password/:token" element={<SetPassword />} />

          <Route path="/admin" element={<CheckPermission accessBy="admin" Component={<AdminLayout/>} /> } >
            <Route index element={<AdminDashboard/>}/>

            <Route path="banner" element={<><Outlet/></>}>
              <Route index element={<Banner.BannerListPage/>}/>
              <Route path="create"  element={<Banner.BannerCreateForm/>} />
              <Route path="edit/:id" element={<>Edit form</>} />
            </Route>
          </Route>

          <Route
            path="seller"
            element={
              <CheckPermission
                accessBy="seller"
                Component={<>Seller Layout</>}
              />
            }
          />
          <Route
            path="Customer"
            element={
              <CheckPermission
                accessBy="customer"
                Component={<>Customer layout</>}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingSection;
