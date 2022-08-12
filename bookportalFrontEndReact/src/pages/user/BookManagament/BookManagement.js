import BookList from "./BookList";
import BookFilter from "./BookFilter";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import BookService from "../../../Service/BookService";
import UserService from "../../../Service/UserService";

function BookManagement(props) {

  const [details, setDetails] = useState({
    books: [],
    pageCount: 0,
    isDataEnd: false,
    isSearchMode: false,
    searchTitle: "",
    authors:[]
  });

  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    getBooks();
  }, []);

  const getBooks = async () => {
    const result = await BookService.getBookWithPageRoleUser(0);
    //console.log(result.data.content);
    setDetails((prevState) => {
      return {
        ...prevState,
        books: result.data.content
      }
    })

    toast(result.message);

  }

  const getOtherBooks = async () => {
    if (details.isSearchMode) {
      getOtherBookWithSearch();
      return;
    }
    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await BookService.getBookWithPageRoleUser(details.pageCount + 1);
   //console.log(details);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          books: prevState.books.concat(result.data.content)
        }
      });

      toast("New data's listed");
    } else {
      setDetails((prevState) => {
        return {
          ...prevState,
          isDataEnd: true
        }
      });
      toast("All data's is listed");

    }


    //console.log(details);


  }

  const getOtherBookWithSearch = async () => {

    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await BookService.getBookWithPageAndTitleRoleUser(details.pageCount + 1,details.searchTitle);
   //console.log(result);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          books: prevState.books.concat(result.data.content)
        }
      });

      toast("New data's listed");
    } else {
      setDetails((prevState) => {
        return {
          ...prevState,
          isDataEnd: true
        }
      });
      toast("All data's is listed");

    }
  }

  async function addToReadingList(bookId) {
    const result = await UserService.addReadingList(bookId);

    toast(result.message);

  }
  async function addToFavouriteList(bookId) {
    const result = await UserService.addFavouriteList(bookId);

    toast(result.message);

  }

  async function search(details) {

    if(details.title.length == 0){
      getBooks();
      return;
    }

    const results = await BookService.getBookWithPageAndTitleRoleUser(0, details.title)
    //console.log(results);
    setDetails((prevState) => {
     /*console.log({
        ...prevState,
        books: results.data.content,
        isSearchMode: true,
        pageCount: 0,
        searchTitle: details.title
      });*/
      return {
        ...prevState,
        books: results.data.content,
        isSearchMode: true,
        pageCount: 0,
        searchTitle: details.title
      }
    })

    toast(results.message);
  }


  return (
    <div className="col-10 ">
      <ToastContainer />
      <BookFilter searchFunction={search} />
      <BookList books={details.books} addToReadingListFunction={addToReadingList} addToFavouriteListFunction={addToFavouriteList} />
      <div className="text-center">
        <button onClick={getOtherBooks} className="btn btn-primary">
          See More
        </button>
      </div>
    </div>
  );

}


export default BookManagement;