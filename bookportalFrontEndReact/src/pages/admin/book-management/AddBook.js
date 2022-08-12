import {useEffect} from "react"

function AddBook(props) {

      useEffect(() => {
           //console.log("Renderin addboook ");
      });

     

      return (
            
            <div className="card ms-2 mt-2" style={{ width: "14rem", float: "left" }}>
                  <p className="text-center">
                        <img className="img mt-3" src="assets/image/add-book.png" alt="add book icon" style={{ width: "75px" }} />
                  </p>
                  <div className="card-body" style={{ paddingTop: "0px" }}>
                        <hr className="mt-4"/>
                        <div>
                              <form>
                                    <div className="row">
                                          <div className="col-6">
                                                <label htmlFor="bookTitle" style={{ fontSize: "11px"}}>Book Title</label>
                                                <input type="text" className="form-control" id="bookTitle" placeholder="Book name" />
                                          </div>
                                          <div className="col-6">
                                                <label htmlFor="bookTitle" style={{ fontSize: "11px" }}>Number Of Page</label>
                                                <input type="text" className="form-control" placeholder="Book Title" />
                                          </div>

                                          <div className="col-12 ">

                                                <select className="form-select mt-2">
                                                      <option defaultValue="" >Select Author</option>
                                                </select>
                                          </div>
                                    </div>

                              </form>
                              <hr />
                              <button className="btn btn-danger ms-4 " style={{paddingBottom:"3px"}}  >Add New Book</button>
                        </div>
                  </div>
            </div>
      );


}

export default AddBook;