import { useEffect, useState } from "react";
import BookService from "../../../Service/BookService";
import AddBookCard from "./AddBookCard";
import AuthorService from "../../../Service/AuthorService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddBook() {

      const [authors, setAuthors] = useState(null);

      const addBook = async (newBook) => {
            var response = await BookService.addBook(newBook);
            toast(response.message);
      }
      useEffect(() => {
            getAuthors();
      },[]);

      const getAuthors = async () => {
            const authors = await AuthorService.getAuthors()
            setAuthors(authors)
      }

      return (
            <div className="col-12 col-md-10">
                  <ToastContainer />
                  <AddBookCard addBookFunction={addBook} authors={authors} />
            </div>
      );
}

export default AddBook;