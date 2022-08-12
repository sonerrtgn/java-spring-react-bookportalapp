import { useState } from "react";


/**
 * 
 * @param {*} props 
 * @returns 
 * 
 * Delete and update operations.
 * normal or update mode.
 */
function Book(props) {
      const { title, numberOfPages, id, author } = props.details;
      const { addToReadingListFunction, addToFavouriteListFunction } = props;

      const [bookDetailsState, updateBookDetailsState] = useState({ title: title, numberOfPages: numberOfPages, author: author });



      function addToReadingList() {
            addToReadingListFunction(id);
      }



      function addToFavouriteList() {
            //console.log("Save book...");
            /**
             * UpdateLogic
             */
            addToFavouriteListFunction(id)
           

      }





      var updateElement = (
            <table className="table">

                  <tbody>
                        <tr>
                              <td>Title: </td>
                              <td>{title}</td>
                        </tr>
                        <tr>
                              <td>Author</td>
                              <td>{author.name}{author.surName}</td>
                        </tr>
                        <tr>

                              <td >Page size</td>
                              <td>{numberOfPages}</td>
                        </tr>
                  </tbody>
            </table>
      );




      return (
            <div className="col-12 col-sm-6 col-md-3">
                  <div className="card ms-2 mt-2" style={{ width: "100%", height: "auto", float: "left" }}>
                        <p className="text-center">
                              <img className="img" src="assets/image/book-icon.png" alt="book" style={{ width: "100px" }} />
                        </p>
                        <div className="card-body" style={{ paddingTop: "0px" }}>
                              <hr />
                              <div className="text-center">
                                    {updateElement}
                                    <hr />
                                    <button className="btn btn-danger ms-3" onClick={() => { addToReadingList() }} >Add To Reading List</button>
                                    <button className="btn btn-danger ms-3 mt-3" onClick={() => { addToFavouriteList() }}>Add To Favourite List</button>
                              </div>
                        </div>
                  </div>
            </div>

      );


}

export default Book;