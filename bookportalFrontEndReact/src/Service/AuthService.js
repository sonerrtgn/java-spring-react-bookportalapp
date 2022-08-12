import axios from "axios";
import { Buffer } from 'buffer';


const AuthService = (function () {
      const _signin = async (info) => {

            var base64Data = Buffer.from(info.userName + ":" + info.password).toString('base64');

            let roles;
            try {
                  const response = await axios.post('http://localhost:8080/api/v1/public/auth/signin', {}, {
                        headers: {
                              Authorization: "Basic " + base64Data
                        }
                  });
                  if (response && response.data) {
                        roles =  response.data.data.roles;
                  }
            } catch (error) {
                 //console.log(error);
            }
            //console.log(roles);
            return {roles:roles,token:base64Data};
      };

      return {
            signin: _signin
      };
})();

export default AuthService;
