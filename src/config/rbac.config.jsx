import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "../pages/auth";


const CheckPermission = ({Component,accessBy}) =>{
        let [userInfo ,setUserInfo] =useState();
        let[error,setError] = useState(false);
       let [Loading, setLoading] = useState(true);

        const getLoggedInUser = async()=>{
            try{
               let user = await Auth.authSvc.getLoggedInUser();
               setUserInfo(user.result);
            }catch(exception){
                  toast.error("Could not proceed your request at this moment.")
                  setError(true);
            }finally{
              setLoading(false);
            }

        }
        useEffect(()=>{
                //get logged in user
                getLoggedInUser();
        },[])

        if(error){
          return <>Error Loading...</>
        }else{
          if(Loading){
            return<>Loading...</>
          }else if(!Loading && userInfo && userInfo.role === accessBy){
            return Component
          }else{
            toast.warning("You do not have permission to access this")
            return <Navigate to={"/" + userInfo.role } />
          }
          
        }



  return <>
   Loading...
  </>

}

export default CheckPermission;