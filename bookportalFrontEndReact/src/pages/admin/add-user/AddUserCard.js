import { useState } from "react";

function AddUserCard({ addUserFunction}) {


      const [userDetails, setUserDetails] = useState(
            {
                  userName:"",
                  password:"",
                  againPassword:""
            });

      const [error,setError] = useState({
            isError:false,
            errorMessage:""
      });

      var {userName,password,againPassword} = userDetails;

      const handleEvent = (event) => {
            setUserDetails({
                  ...userDetails,
                  [event.target.name] : event.target.value
            });

           //console.log(setUserDetails);
      }

      function addUser(){
            if(userDetails.password != userDetails.againPassword){
                  setError({
                        isError:true,
                        errorMessage:"passwords are not the same"
                  });

                  return ;
            }
            setError({isError:false,errorMessage:""})
            addUserFunction(userDetails);
            
      }



      return (
            <div className="card mt-5" style={{ width: "80%", marginLeft: "10%" }}>
                  <div className="card-header">
                        <p className="fs-3">Add new user</p>
                  </div>
                  <div className="card-body">
                        {
                              error.isError && <span className="text-danger">* {error.errorMessage}<br/></span>
                        }
                        <span>Username</span>
                        <input type="text" className="form-control" name="userName" value={userName} onChange={handleEvent}/>
                        <span>Password</span>
                        <input type="password" className="form-control"  name="password" value={password} onChange={handleEvent}/>
                        <span>Again password</span>
                        <input type="password" className="form-control"  name="againPassword" value={againPassword} onChange={handleEvent}/>
                        
                        
                        <button className="btn btn-lg btn-danger mt-3" style={{ float: "right" }} onClick={addUser}>Add</button>
                  </div>
            </div>
      );
}

export default AddUserCard;