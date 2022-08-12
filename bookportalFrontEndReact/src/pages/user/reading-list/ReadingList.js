import BookItem from "./../BookItem";
import UserService from "../../../Service/UserService";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";


function ReadingList() {

      const [details, setDetails] = useState({
            books: null
      });


      useEffect(() => {
            getReadingList();
      }, []);

      async function getReadingList() {
            const result = await UserService.getReadingList();

            //console.log(result);
            setDetails({ books: result.data });
            toast(result.message);
      }

      async function deleteItem(id) {
            const result = await UserService.substractReadingList(id);

            if (result.success) {
                  var books = details.books.filter((book) => {
                        if (book.id !== id) {
                              return true
                        }
                        return false;
                  });

                  setDetails({ books: books });
            }

            toast(result.message);


      }

      var emptyElement = <h1>Your reading list is empty</h1>
      var isEmpty = false;

      if(details.books == null || details.books.length == 0){      
            isEmpty = true;
            //console.log(details.books);
      }


      return (
            <div className="col-10">
                  <ToastContainer />

                  <div className="row">
                        {
                              isEmpty && emptyElement
                        }
                        {
                              details.books && details.books.map((book) => {
                                    //console.log(book);
                                    return (
                                          <BookItem details={book} key={book.id} deleteItemFunction={deleteItem} />
                                    )
                              })
                        }
                  </div>
            </div>

      );
}

export default ReadingList;