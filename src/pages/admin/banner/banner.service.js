import axios from "axios"
import axiosInstance from "../../../config/axios.config"
import HttpService from "../../../services/http.service"

class BannerService extends HttpService {

   createBanner = async(data) => {
    try{
        let response = await  this.postRequest('/v1/banner',data,{auth: true, file:false})
        return response;
    }catch(exception){
      throw exception
    }
   }
   
    listAllBanners = async (perpage =10, page=1) =>{
      try{
          let response = await this.getRequest("/v1/banner?perPage="+perpage+"&page"+page, {auth:true});
          return response;
      }catch(exception){
        throw exception;
      }
    }
}

export default BannerService;