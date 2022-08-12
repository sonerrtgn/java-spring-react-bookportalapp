import { useState } from "react";
import UserService  from "../Service/UserService";

function Signin({changeToPage, updateLoginInfoFunction}) {
      const [userDetails, setUserDetails] = useState(
            {
                  userName: "",
                  password: "",
                  againPassword: ""
            });

      const [error, setError] = useState({
            isError: false,
            errorMessage: ""
      });

      var { userName, password, againPassword } = userDetails;

      const handleEvent = (event) => {
            setUserDetails({
                  ...userDetails,
                  [event.target.name]: event.target.value
            });

           //console.log(setUserDetails);
      }

      async function addUser() {
            if(userDetails.userName.length < 4){
                  setError({
                        isError: true,
                        errorMessage: "Username "
                  });

                  return;
            }
            if (userDetails.password != userDetails.againPassword) {
                  setError({
                        isError: true,
                        errorMessage: "passwords are not the same"
                  });

                  return;
            }
            var result = await UserService.publicAddUser({
                  userName:userName,
                  password:password
            });

            if(result.success){

                 toLogin();
            }
           //console.log(result);
            setError({ isError: true, errorMessage: result.message})
            //addUserFunction(userDetails);

      }



      const toLogin = () => {
            changeToPage();
      }

      return (

            <div className="container-fluid">
                  <div className="row" style={{ marginTop: "7vh" }}>
                        <div className="col-4"></div>
                        <div className="col-12 col-md-4">

                              <div className="card mt-5" style={{ width: "80%", marginLeft: "10%" }}>
                                    <div className="card-header">
                                          <p className="fs-3 text-center">BOOK-PORTAL</p>
                                    </div>
                                    <div className="card-body">
                                          {
                                                error.isError && <span className="text-danger">* {error.errorMessage}<br /></span>
                                          }
                                          <span>Username</span>
                                          <input type="text" className="form-control" name="userName" value={userName} onChange={handleEvent} />
                                          <span>Password</span>
                                          <input type="password" className="form-control" name="password" value={password} onChange={handleEvent} />
                                          <span>Again password</span>
                                          <input type="password" className="form-control" name="againPassword" value={againPassword} onChange={handleEvent} />


                                          <button className="btn btn-lg btn-danger mt-3" style={{ float: "right" }} onClick={addUser}>Sign in</button>
                                          <br/><br/><br/>
                                          <button className="btn" onClick={toLogin}>I have an account.</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

      );

}

export default Signin;