import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server Timed out...",
  headers: {
    "Content-Type": "application/json",
  },
});

//interceptors

axiosInstance.interceptors.response.use(
  (response) => {
    //for success
    return response.data;
  },
  (error) => {
    //for error
    if (error.response.status === 401) {
      //redirect user to login Screen
      //refresh token
      //window.location.href ="/login"
    } else if (error.response.status === 403) {
      //access denied

      //user jun page ma cha tei pg reload garna paryo
      toast.warning("you do not have previlidge to access this pannel");
      // window.location.href = "/";
    } else if (error.response.status === 404) {
      console.log(error.response);
      // window.location.href = "/error";
    } else {
      throw error.response;
    }
    console.error("reject interceptor", error);
  }
);

export default axiosInstance;
