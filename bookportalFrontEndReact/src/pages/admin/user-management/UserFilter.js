import { useState } from "react";


function UserFilter({searchFunction}) {

      const [userName,setuserName] = useState("");

      function search(){
            searchFunction(userName);
      }

      const handleEvent = (event) => {
            setuserName({
                  [event.target.name] : event.target.value
            });
      }
      return (
            <div className="row mt-2">
                  <p className="fs-3">Filter</p>
                  <div className="col-12 col-md-10">
                        <input type="text" className="form-control mt-2" style={{ fontSize: "12px" }} placeholder="Book title" name="userName" onChange={handleEvent} />
                  </div>

                  
                  <div className="col-12 col-md-2">
                        <input type="submit" className="form-control mt-2"  style={{ fontSize: "12px" }} value="Search" onClick={search}/>
                  </div>
            </div>
      );
}


export default UserFilter;