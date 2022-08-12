import { useState } from "react";
import AuthService from "../Service/AuthService";
import Login from "./Login";
import Signin from "./Signin";


function Home({updateLoginInfoFunction}) {

      const PAGE_TYPE_LOGIN = "LOGIN";
      const PAGE_TYPE_SIGNIN = "SIGIN"; 

      const [loginInfo, setLoginInfo] = useState({ userName: "", password: ""});
      const [pageType,setPageType] = useState(PAGE_TYPE_LOGIN);
      const [error, setError] = useState(false);


      function switchToPage(){
            if(pageType == PAGE_TYPE_LOGIN){
                  setPageType(PAGE_TYPE_SIGNIN);
            }else{
                  setPageType(PAGE_TYPE_LOGIN);
            }
      }

     
      if(pageType == PAGE_TYPE_LOGIN){
            return <Login updateLoginInfoFunction={updateLoginInfoFunction} changeToPage={switchToPage}/>;
      }else{
            return <Signin changeToPage={switchToPage}/>;

      }
}


export default Home;