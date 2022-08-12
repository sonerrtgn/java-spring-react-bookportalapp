import { useEffect, useState } from "react";
import UserService from "../../../Service/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUserCard from "./AddUserCard";


function AddUser() {

      const [user, setUser] = useState(null);

      async function addUser(newUser){
            var response = await UserService.addUser(newUser);
            toast(response.message);
      }
     

      return (
            <div className="col-10">
                  <ToastContainer />
                  <AddUserCard addUserFunction={addUser} />
            </div>
      );
}

export default AddUser;