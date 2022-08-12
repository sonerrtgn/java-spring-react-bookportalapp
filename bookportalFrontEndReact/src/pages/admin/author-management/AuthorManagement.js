import { useState, useEffect } from "react";
import AuthorService from "../../../Service/AuthorService";
import AuthorList from "./AuthorList";
import AuthorFilter from "./AuthorFilter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AuthorManagement(props) {

  const [details, setDetails] = useState({
    authors: [],
    pageCount: 0,
    isDataEnd: false,
    isSearchMode: false,
    searchUserName: ""
  });

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    const result = await AuthorService.getAuthorPage(0)
    //console.log(result);
    setDetails({
      ...details,
      authors: result.data.content,
      pageCount:0
    })
  }

  const getOtherAuthor = async () => {
    if (details.isSearchMode) {
      getOtherBookWithSearch();
      return;
    }


    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await AuthorService.getAuthorPage(details.pageCount + 1);
  //console.log(details);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          authors: prevState.authors.concat(result.data.content)
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

  async function getOtherBookWithSearch() {
    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await AuthorService.getAuthorWithPageAndName(details.pageCount + 1, details.searchUserName);
  //console.log(details);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          authors: prevState.authors.concat(result.data.content)
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

  async function search(details) {
    if(details.name.length == 0){
      getAuthors();
      return;
    }
  //console.log(details);
    const results = await AuthorService.getAuthorWithPageAndName(0, details.name)
  //console.log(results);
    setDetails({
      ...details,
      authors: results.data.content,
      isSearchMode: true,
      pageCount: 0,
      searchUserName: details.name
    })

    toast(results.message);
  }

  const deleteAuthor = async (authorId) => {

    const deleteOperation = await AuthorService.deleteAuthor({
      id: authorId
    });

  //console.log(deleteOperation);


    var authors = details.authors.filter((author) => {
      if (author.id !== authorId) {
        return true
      }
      return false;
    });
  //console.log(authors);
    setDetails((prevState) => {
      return {
        ...prevState,
        authors: authors
      };
    })

    toast(deleteOperation);

  }
  const updateAuthor = async (aupdateAuthorParam) => {
    var authors = details.authors.map((author) => {
      if (author.id !== aupdateAuthorParam.id) {
        return author;
      }
      return aupdateAuthorParam;
    });

    setDetails((prevState) => {
      return {
        ...prevState,
        authors: authors
      };
    })

    const response = await AuthorService.updateAuthor(aupdateAuthorParam)

  //console.log(response);
    toast(response);


  }


  return (
    <div className="col-10 col-md-10">
      <ToastContainer />

      <AuthorFilter  searchFunction={search}/>
      <AuthorList authors={details.authors} deleteAuthorFunction={deleteAuthor} updateAuthorFunction={updateAuthor} />
      <div className="text-center">
        <button onClick={getOtherAuthor} className="btn btn-primary  mt-4 mb-4">
          See More
        </button>
      </div>
    </div>
  );

}


export default AuthorManagement;