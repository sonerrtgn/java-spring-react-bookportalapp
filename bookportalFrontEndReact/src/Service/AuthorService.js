import axios from "axios";
import LocalStorageService from "./LocalStorageService"

const AuthorService = (function () {
      const _getAuthor = async () => {
            var authors;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/author', {});
                  if (response && response.data.success) {
                        //console.log(response);
                        authors =  response.data.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                        return;
                  }
            }
            //console.log(roles);
            return authors;
      };

      const _getAuthorPage = async (pageNumber) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/author/page', {
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

      const _getAuthorWithPageAndName = async (pageNumber,name) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/author/page/search/'+name, {
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

      const _addAuthor = async (author) => {
            var response;
            try {
                  const reqResponse = await axios.post('http://localhost:8080/api/v1/admin/author', author);
                 //console.log(reqResponse);
                  if (reqResponse && reqResponse.data.success) {
                        response =  reqResponse.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                        return ;
                  }
                 //console.log(error);

                  response =  error.response.data;

            }
            //console.log(roles);
            return response;
      };

      const _deleteAuthor = async (author) => {
           //console.log(author);
            var response;
            try {
                  const reqResponse = await axios.delete('http://localhost:8080/api/v1/admin/author/'+author.id, );
                  if (reqResponse && reqResponse.data.success) {
                        response =  reqResponse.data.message;
                  }else if(reqResponse && !reqResponse.data.success){
                        response =  reqResponse.data.message;

                  }
                 //console.log(reqResponse);

            } catch (error) {
                  
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                        return;
                  }

                  if(error.response.data.success == false){
                        response =  error.response.data.message;
                  }else{
                        response = "Unkown error";
                  }

                 //console.log(error);
            }
           //console.log(response);
            //console.log(roles);
            return response;
      };

      const _updateAuthor = async (author) => {
            var response;
            try {
                  const reqResponse = await axios.post('http://localhost:8080/api/v1/admin/author/update', author);
                  if (reqResponse && reqResponse.data.success) {
                        response =  reqResponse.data.message;
                  }else if(reqResponse && !reqResponse.data.success){
                        response =  reqResponse.data.message;

                  }

                //console.log(response);
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }
                  
                  if(error.response.data.success == false){
                        response =  error.response.data.message;
                  }else{
                        response = "Unkown error";
                  }
            }
            //console.log(roles);
            return response;
      };


      return {
            getAuthors: _getAuthor,
            addAuthor: _addAuthor,
            deleteAuthor:_deleteAuthor,
            updateAuthor: _updateAuthor,
            getAuthorPage:_getAuthorPage,
            getAuthorWithPageAndName:_getAuthorWithPageAndName
      };
})();

export default AuthorService;
