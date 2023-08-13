import  BannerCreateForm from "./banner-create.page"
import BannerService from "./banner.service";
import BannerListPage from "./banner-list";

const bannerSvc = new BannerService()
export default{
   BannerCreateForm,
   bannerSvc,
   BannerListPage
}