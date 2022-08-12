import axios from "axios";
import LocalStorageService from "../Service/LocalStorageService";

const AxiosConfigurer = (function () {
  const _configure = () => {
    // Add a request interceptor
    axios.interceptors.request.use(
      (config) => {
        const user = LocalStorageService.getUser();
        //console.log(user);
        if (user) {
          config.headers["Authorization"] = "Basic " + user.token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  };

  return {
    configure: _configure
  };
})();

export default AxiosConfigurer;
