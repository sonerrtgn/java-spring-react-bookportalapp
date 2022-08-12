import { useState } from "react";

function AddAuthorCard({ addAuthorFunction }) {


      const [authorDetails, setBookDetails] = useState(
            {
                  name: "",
                  surName: "",
                  birthDate: "",
            });

      var { name, surName, birthDate } = authorDetails;

      const handleEvent = (event) => {
            setBookDetails({
                  ...authorDetails,
                  [event.target.name]: event.target.value
            });

            //console.log(authorDetails);
      }



      function addAuthor() {
            addAuthorFunction(authorDetails);
      }

      return (
            <div className="card mt-5" style={{ width: "80%", marginLeft: "10%" }}>
                  <div className="card-header">
                        <p className="fs-3">Add new author</p>
                  </div>
                  <div className="card-body">
                        <span>Author name</span>
                        <input type="text" className="form-control" name="name" value={name} onChange={handleEvent} />
                        <span>Author Surname</span>
                        <input type="text" className="form-control" name="surName" value={surName} onChange={handleEvent} />
                        <span>Birth date</span>
                        <input type="text" className="form-control" name="birthDate" value={birthDate}  placeholder="2003-03-17"  onChange={handleEvent} />

                        <button className="btn btn-lg btn-danger mt-3" style={{ float: "right" }} onClick={addAuthor}>Add</button>
                  </div>
            </div>
      );
}

export default AddAuthorCard;