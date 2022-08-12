import axios from "axios";
import LocalStorageService from "./LocalStorageService"


const BookService = (function () {
      var books;
      const _getBooks = async () => {

            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/book', {});
                  if (response && response.data.success) {
                       //console.log(response);
                        books = response.data.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                 //console.log("is error");
            }
            //console.log(roles);
            return books;
      };

      const _getBookWithPageAndTitle = async (pageNumber,title) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/book/page/search/'+title, {
                        params: {
                              page: pageNumber,
                              numberOfData: 8
                        }
                  });
                  if (response && response.data.success) {
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _getBookWithPageAndTitleRoleUser = async (pageNumber,title) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/user/book/page/search/'+title, {
                        params: {
                              page: pageNumber,
                              numberOfData: 8
                        }
                  });
                  if (response && response.data.success) {
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };


      const _getBookWithPageRoleUser = async (pageNumber) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/user/book/page', {
                        params: {
                              page: pageNumber,
                              numberOfData: 8
                        }
                  });
                  if (response && response.data.success) {
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _getBooksRoleUser = async () => {

            try {
                  const response = await axios.get('http://localhost:8080/api/v1/user/book', {});
                  if (response && response.data.success) {
                       //console.log(response);
                        books = response.data.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                 //console.log("is error");
            }
            //console.log(roles);
            return books;
      };



      const _addBook = async (book) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/admin/book', book);
                  if (response && response.data.success) {
                       //console.log(response);
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _deleteBook = async (book) => {
            var result;
            try {
                  const response = await axios.delete('http://localhost:8080/api/v1/admin/book/'+book.id);
                  if (response && response.data.success) {
                       //console.log(response);
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _updateBook = async (book) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/admin/book/update', book);
                  if (response && response.data.success) {
                       //console.log(response);
                        result = response.data;
                  }
            } catch (error) {
                  if (error.response.status == 401 || error.response.status == 403) {
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      return {
            addBook: _addBook,
            deleteBook: _deleteBook,
            userRoleGetBooks: _getBooksRoleUser,
            getBookWithPageRoleUser: _getBookWithPageRoleUser,
            getBookWithPageAndTitle:_getBookWithPageAndTitle,
            updateBook:_updateBook,
            getBookWithPageAndTitleRoleUser:_getBookWithPageAndTitleRoleUser
      };
})();

export default BookService;
