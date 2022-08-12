import { useState } from "react";


function BookFilter({searchFunction}) {
      
      const [title,setTitle] = useState("");

      function search(){
            searchFunction(title);
      }

      const handleEvent = (event) => {
            setTitle({
                  [event.target.name] : event.target.value
            });
      }
      function search(){
            searchFunction(title)
      }
      return (

            <div className="row mt-2">
                  <p className="fs-3">Filter</p>
                  <div className="col-12 col-md-10 mt-2">
                        <input type="text" className="form-control" name="title"  onChange={handleEvent} style={{ fontSize: "12px" }} placeholder="Book title?" />
                  </div>

                  <div className="col-12 col-md-2 mt-2">
                        <input type="submit" className="form-control" value="Search" onClick={search}/>
                  </div>
            </div>
      );
}


export default BookFilter;