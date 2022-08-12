import { useState } from "react";
import AuthService from "../Service/AuthService";


function Login({ updateLoginInfoFunction, changeToPage }) {

      const [loginInfo, setLoginInfo] = useState({ userName: "", password: "" });
      const [error, setError] = useState(false);
      const handleChange = (event) => {
            setLoginInfo((prevState) => {
                  return {
                        ...prevState,
                        [event.target.name]: event.target.value
                  }
            });
            //console.log(loginInfo);
      };

      const login = async () => {
            const response = await AuthService.signin(loginInfo);
            //console.log(loginInfo);
            //console.log(response);
            if (response.roles) {
                  var role;
                  if ((response.roles[0] && response.roles[0] == "ROLE_ADMIN") ||
                        response.roles[1] && response.roles[1] == "ROLE_ADMIN") {
                        role = "ADMIN";
                  } else if(response.roles[0] && response.roles[0] == "ROLE_USER"){
                        role = "USER";
                  }
                  updateLoginInfoFunction({
                        isLogin: true,
                        role: role,
                        token: response.token
                  });
            } else {
                  setError(true);
            }

      }


      const toSignin = () => {
            changeToPage();
      }
      return (
            <div className="container-fluid">
                  <div className="row" style={{ marginTop: "30vh" }}>
                        <div className="col-4"></div>
                        <div className="col-12 col-md-4">
                              {
                                    error && <span className="text-danger">Your username or password is wrong.<br /></span>
                              }
                              <span>User name: </span>
                              <input type="text" name="userName" className="form-control" value={loginInfo.name} onChange={handleChange} />

                              <span>Password</span>
                              <input type="password" name="password" className="form-control" value={loginInfo.password} onChange={handleChange} />

                              <input type="submit" value="Login" className="form-control mt-2 bg-danger text-light" onClick={login} />

                              <input type="submit" value="Or Sign İn" className="form-control mt-2 bg-primary text-light" onClick={toSignin} />
                        </div>
                  </div>
            </div>
      );
}

export default Login;