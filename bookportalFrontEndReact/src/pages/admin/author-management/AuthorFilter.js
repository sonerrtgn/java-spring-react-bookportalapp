import { useState } from "react";


function AuthorFilter({searchFunction}) {
      const [name,setName] = useState("");

      function search(){
            searchFunction(name);
      }

      const handleEvent = (event) => {
            setName({
                  [event.target.name] : event.target.value
            });
      }


      return (
            <div className="row mt-2">
                  <p className="fs-3">Filter</p>
                  <div className="col-12 col-md-10">
                        <input type="text" className="form-control" style={{ fontSize: "12px" }} placeholder="Author name" name="name" onChange={handleEvent} />
                  </div>

                 
                  <div className="col-12 col-md-2">
                        <input type="submit" className="form-control" value="Search" onClick={search}/>
                  </div>
            </div>
      );
}


export default AuthorFilter;