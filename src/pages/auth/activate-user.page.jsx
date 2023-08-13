import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {Auth} from "./";
const ActivateUser = () =>{
    let params = useParams()
    let navigate = useNavigate();
    const loadUser =async() => {
      //api call
      try{
          let user = await Auth.authSvc.getUserByToken(params.token);
          toast.success("Your account has been activated.Please login to continue")
          navigate("/login")
          
      }catch(exception){
        let msg =
          exception.data.msg ??
          "Cannot activate your account at this moment.Please contact the Admin";
        toast.warning(msg)
        // toast.warning("Cannot activate your account at this moment.Please contact the Admin")
        navigate("/register")
      }
    }

    useEffect(()=>{
loadUser()
    },[])
      return(<>
    
  
  </>)
}

export default ActivateUser;