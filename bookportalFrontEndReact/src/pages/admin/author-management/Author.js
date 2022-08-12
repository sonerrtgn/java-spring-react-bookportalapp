import { useState } from "react";


/**
 * 
 * @param {*} props 
 * @returns 
 * 
 * Delete and update operations.
 * normal or update mode.
 */
function Author(props) {
      const { name, surName, id, birthDate } = props.details;
      const { deleteAuthorFunction, updateAuthorFunction } = props;

      const [authorDetailState, updateAuthorDetailState] = useState({ name: name, surName: surName, birthDate: birthDate,id:id });


      function handleEvent(event) {
            updateAuthorDetailState((prevState) => {
                  return {
                        ...prevState,
                        [event.target.name]: event.target.value
                  }
            });
      }

      function deleteAuthor() {
           //console.log("delete book button by Book.js");
            deleteAuthorFunction(id);
      }



      function saveAuthor() {
            //console.log("Save book...");
            /**
             * UpdateLogic
             */
             updateAuthorFunction(authorDetailState);

           //console.log(authorDetailState);

      }





      var updateElement =
            <>
                  <form>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Name:</span>
                              </div>
                              <div className="col-8">
                                    <input type="text" name="name" value={authorDetailState.name} onChange={handleEvent} className="form-control" style={{ fontSize: "12px" }} />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Surname:</span>
                              </div>
                              <div className="col-8">
                                    <input type="text" name="surName" value={authorDetailState.surName} onChange={handleEvent} className="form-control mt-1" style={{ fontSize: "12px" }} />

                              </div>
                        </div>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Birth date</span>
                              </div>
                              <div className="col-8">
                                    <input type="text" className="form-control mt-1" name="birthDate" defaultValue={authorDetailState.birthDate} onChange={handleEvent} style={{ fontSize: "12px" }} />

                              </div>
                        </div>

                  </form>
            </>



      return (
            <div className="col-12 col-sm-6 col-md-3">
                  <div className="card ms-2 mt-2" style={{ width: "100%", height: "350px", float: "left" }}>
                        <p className="text-center mt-3">
                              <img className="img" src="assets/image/author.png" alt="book" style={{ width: "100px" }} />
                        </p>
                        <div className="card-body" style={{ paddingTop: "0px" }}>
                              <hr />
                              <div className="text-center">
                                    {updateElement}
                                    <hr />
                                    <button className="btn btn-danger ms-3" onClick={() => { deleteAuthor() }} >Delete</button>
                                    <button className="btn btn-danger ms-3" onClick={() => { saveAuthor() }}>Update</button>
                              </div>
                        </div>
                  </div>
            </div>

      );


}

export default Author;