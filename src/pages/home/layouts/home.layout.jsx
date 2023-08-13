import { Outlet } from "react-router-dom";
import HeaderSection from "../component/header.componet";
import Footer from "../component/footer.component";


const HomePageLayout = () =>{
  return (<>
  {/* <HeaderSection/> */}
      <Outlet/>
  
  
  <Footer/>
  </>)
}

export default HomePageLayout;