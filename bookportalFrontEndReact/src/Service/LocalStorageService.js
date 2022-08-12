var userInfo;

const LocalStorageService = (function () {
      const USER = "user";

      function _setUser(user) {
            userInfo = user;
            //localStorage.setItem(USER,  JSON.stringify(user));
            //console.log(user);
      }

      function _getUser() {
            if(userInfo){
                  return userInfo;
            }
            //if(localStorage.getItem(USER))
            //      return JSON.parse(localStorage.getItem(USER));
      }

      function _clearUser() {
            userInfo = null;
            //localStorage.removeItem(USER);
      }

      return {
            setUser: _setUser,
            getUser: _getUser,
            clearUser: _clearUser
      };
})();

export default LocalStorageService;
