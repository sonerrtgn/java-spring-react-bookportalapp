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
      //console.log("Book key: "+props.details.id);
      const { title, numberOfPages, id, author } = props.details;
      const { deleteBookFunction, updateBookFunction, authors} = props;

      const [bookDetailsState, updateBookDetailsState] = useState({ title: title, numberOfPages: numberOfPages, author: author,id:id});
      //console.log(authors);

      function handleBookTitleChange(event) {
            updateBookDetailsState((prevState) => {
                  return {
                        ...prevState,
                        title: event.target.value
                  }
            });
      }

      function handleBookAuthorChange(event) {
            var index = event.nativeEvent.target.selectedIndex;
            var authorName = event.nativeEvent.target[index].text
            updateBookDetailsState((prevState) => {
                  return {
                        ...prevState,
                        author: {
                              id: event.target.value,
                              name: authorName
                        }
                  }
            });

            //console.log(event);
      }

      function handleBookNumberOfPageChange(event) {
            updateBookDetailsState((prevState) => {
                  return {
                        ...prevState,
                        numberOfPages: event.target.value
                  }
            });
      }

      function deleteBook() {
            //console.log("delete book button by Book.js");
            deleteBookFunction(id);
      }

      function saveBook() {
            //console.log("Save book...");
            /**
             * UpdateLogic
             */
             updateBookFunction(bookDetailsState);

            //console.log(bookDetailsState);

      }





      var updateElement =
            <>
                  <form>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Title:</span>
                              </div>
                              <div className="col-8">
                                    <input type="text" name="bookTitle" value={bookDetailsState.title} onChange={handleBookTitleChange} className="form-control" style={{ fontSize: "12px" }} />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Author:</span>
                              </div>
                              <div className="col-8">
                                    <select className="form-select mt-1" name="bookAuthor" defaultValue={bookDetailsState.author.id} onChange={handleBookAuthorChange} style={{ fontSize: "12px" }}>
                                          {
                                                authors.map((author) => {
                                                      return <option key={author.id} value={author.id}>{author.name} {author.surName}</option>
                                                })
                                          }

                                    </select>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-4" style={{ fontSize: "12px" }}>
                                    <span className="mt-1" style={{ float: "right" }}>Number of page:</span>
                              </div>
                              <div className="col-8">
                                    <input type="number" className="form-control mt-1" name="bookNumerOfPage" defaultValue={bookDetailsState.numberOfPages} onChange={handleBookNumberOfPageChange} style={{ fontSize: "12px" }} />

                              </div>
                        </div>

                  </form>
            </>



      return (
            <div className="col-12 col-sm-6 col-md-3">
                  <div className="card ms-2 mt-2" style={{ width: "100%", height: "350px", float: "left" }}>
                        <p className="text-center">
                              <img className="img" src="assets/image/book-icon.png" alt="book" style={{ width: "100px" }} />
                        </p>
                        <div className="card-body" style={{ paddingTop: "0px" }}>
                              <hr />
                              <div className="text-center">
                                    {updateElement}
                                    <hr />
                                    <button className="btn btn-danger btn-sm ms-3" onClick={() => { deleteBook() }} >Delete</button>
                                    <button className="btn btn-danger btn-sm  ms-3" onClick={() => { saveBook() }}>Update</button>
                              </div>
                        </div>
                  </div>
            </div>

      );


}

export default Book;