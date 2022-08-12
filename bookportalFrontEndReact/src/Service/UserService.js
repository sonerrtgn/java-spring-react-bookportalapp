import axios from "axios";
import LocalStorageService from "./LocalStorageService"


const UserService = (function () {
     
      /**
       * Function get users with page
       * @param {pageNumber} pageNumber page number of users
       * @returns {ResultObject} result -> users and page info
       * 
       */
      const _getUsersPage = async (pageNumber) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/user/page', {
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

      /**
       * 
       * @param {*} pageNumber 
       * @param {*} userName 
       * @returns {ResultObject} return users with page number and search username
       */
      const _getUserWithUserNameAndPaging = async (pageNumber,userName) => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/admin/user/page/search/'+userName, {
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

      const _addUser = async (user) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/admin/user', user);
                  if (response && response.data.success) {
                        //console.log(response);
                        result =  response.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _publicAddUser = async (user) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/public/user', user);
                  if (response && response.data.success) {
                        //console.log(response);
                        result =  response.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;
                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _deleteUser= async (user) => {
            var result;
            try {
                  const response = await axios.delete('http://localhost:8080/api/v1/admin/user/'+user.id, );
                  if (response && response.data.success) {
                        //console.log(response);
                        result =  response.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;
            }
            //console.log(roles);
            return result;
      };

      const _updateUser = async (user) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/admin/user/update', user);
                  if (response && response.data.success) {
                        result =  response.data;
                  }else if(response && !response.data.success){
                        result =  response.data;

                  }

                 //console.log(response);
            } catch (error) {
                  if(error.response.data.success == false){
                        result =  error.response.data;
                  }else{
                        result = {
                              success:false,
                              message:"Unkown error"
                        };
                  }
            }
            //console.log(roles);
            return result;
      };

      const _addReadingList = async (bookId) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/user/user/readingList/'+bookId, {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status == 401 || error.response.status == 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _addFavouriteList = async (bookId) => {
            var result;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/user/user/favoriteList/'+bookId, {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status === 401 || error.response.status === 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _getReadingList = async () => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/user/user/readingList', {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status === 401 || error.response.status === 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _getFavouriteList = async () => {
            var result;
            try {
                  const response = await axios.get('http://localhost:8080/api/v1/user/user/favoriteList', {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status === 401 || error.response.status === 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _substractReadinList = async (bookId) => {
            var result;
            try {
                  const response = await axios.delete('http://localhost:8080/api/v1/user/user/readingList/'+bookId, {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status === 401 || error.response.status === 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };

      const _substractFavouriteList = async (bookId) => {
            //console.log(bookId);
            var result;
            try {
                  const response = await axios.delete('http://localhost:8080/api/v1/user/user/favoriteList/'+bookId, {});
                  if (response && response.data.success) {
                       result = response.data;
                  }
            } catch (error) {
                  if(error.response.status === 401 || error.response.status === 403){
                        LocalStorageService.clearUser();
                        window.location = "";
                  }

                  result = error.response.data;

                  //console.log(error);
            }
            //console.log(roles);
            return result;
      };


      return {
            addUser : _addUser,
            deleteUser: _deleteUser,
            updateUser: _updateUser,
            publicAddUser: _publicAddUser,
            addReadingList:_addReadingList,
            addFavouriteList: _addFavouriteList,
            getReadingList: _getReadingList,
            getFavouriteList: _getFavouriteList,
            substractFavouriteList: _substractFavouriteList,
            substractReadingList: _substractReadinList,
            getUsersPage:_getUsersPage,
            getUserWithUserNameAndPaging:_getUserWithUserNameAndPaging
      };
})();

export default UserService;
