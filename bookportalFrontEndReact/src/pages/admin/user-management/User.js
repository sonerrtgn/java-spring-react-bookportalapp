import { useState } from "react";


/**
 * 
 * @param {*} props 
 * @returns 
 * 
 * Delete and update operations.
 * normal or update mode.
 */
function User(props) {
      const { userName, id } = props.details;
      const { deleteUserFunction, updateUserFunction } = props;

      const [userDetailState, updateUserDetailState] = useState({ userName: userName,id:id });


      function handleEvent(event) {
            updateUserDetailState((prevState) => {
                  return {
                        ...prevState,
                        [event.target.name]: event.target.value
                  }
            });
      }

      function deleteUser() {
           //console.log("delete user button by User.js");
            deleteUserFunction(id);
      }



      function saveUser() {
            //console.log("Save book...");
            /**
             * UpdateLogic
             */
            updateUserFunction(userDetailState);

            //console.log(userDetailState);

      }





      var updateElement =
            <>
                  <form>
                        
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Username:</span>
                              </div>
                              <div className="col-8">
                                    <input type="text" name="userName" value={userDetailState.userName} onChange={handleEvent} className="form-control " style={{ fontSize: "12px" }} />

                              </div>
                        </div>
                  </form>
            </>



      return (
            <div className="col-12 col-sm-6 col-md-3">
                  <div className="card ms-2 mt-2" style={{ width: "100%", height: "auto", float: "left" }}>
                        <p className="text-center mt-3">
                              <img className="img" src="assets/image/reading.png" alt="book" style={{ width: "100px" }} />
                        </p>
                        <div className="card-body" style={{ paddingTop: "0px" }}>
                              <hr />
                              <div className="text-center">
                                    {updateElement}
                                    <hr />
                                    <button className="btn btn-danger ms-3" onClick={() => { deleteUser() }} >Delete</button>
                                    <button className="btn btn-danger ms-3" onClick={() => { saveUser() }}>Update</button>
                              </div>
                        </div>
                  </div>
            </div>

      );


}

export default User;