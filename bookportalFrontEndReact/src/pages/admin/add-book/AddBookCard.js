import { useState } from "react";

function AddBookCard({ addBookFunction, authors}) {

     //console.log(authors);

      const [bookDetails, setBookDetails] = useState(
            {
                  title: "",
                  numberOfPages: 0,
                  author: {
                        id: 0
                  }
            });

      var {title,numberOfPages,author} = bookDetails;

      const handleEvent = (event) => {
            setBookDetails({
                  ...bookDetails,
                  [event.target.name] : event.target.value
            });

           //console.log(bookDetails);
      }

      const handleSelect = (event) => {
           //console.log(event);
            setBookDetails({
                  ...bookDetails,
                  author:{
                        id:event.target.value
                  }
            });

      }

      

      function addBook(){
            addBookFunction(bookDetails);
            
      }



      return (
            <div className="card mt-5" style={{ width: "80%", marginLeft: "10%" }}>
                  <div className="card-header">
                        <p className="fs-3">Add new book</p>
                  </div>
                  <div className="card-body">
                        <span>Book Title</span>
                        <input type="text" className="form-control" name="title" value={title} onChange={handleEvent}/>
                        <span>Book number of pages</span>
                        <input type="number" className="form-control"  name="numberOfPages" value={numberOfPages} onChange={handleEvent}/>
                        <span>Select author</span>
                        <select className="form-select" name="author" onChange={handleSelect}>
                              <option  defaultValue={author.id}>Select author</option>
                              {
                                    authors && authors.map((author) => {
                                          return (<option key={author.id} value={author.id}>{author.name} {author.surName}</option>)
                                    })
                              }
                        </select>
                        <button className="btn btn-lg btn-danger mt-3" style={{ float: "right" }} onClick={addBook}>Add</button>
                  </div>
            </div>
      );
}

export default AddBookCard;