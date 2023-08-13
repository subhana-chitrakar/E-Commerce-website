import BannerSection from "./home/component/banner.component";
import SaleSection from "./home/component/sale.component";
import Advertisement from "./home/component/advertisement.component";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PopularPicks from "./home/component/popular.component";
import HotSelling from "./home/component/hot-selling.component";
import NewArrival from "./home/component/newarrival.component";
import HeaderSection from "./home/component/header.componet";



const HomePage1 = () => {
  return (
    <>
    <HeaderSection/>
      <BannerSection />
      <SaleSection />
      <PopularPicks />
      <HotSelling />
      <Advertisement />
      <NewArrival/>
    </>
  );
};

export default HomePage1;
