import { useState, useEffect } from "react";
import UserService from "../../../Service/UserService";
import UserList from "./UserList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserFilter from "./UserFilter";


function UserManagement(props) {

  const [details, setDetails] = useState({
    users: [],
    pageCount: 0,
    isDataEnd: false,
    isSearchMode: false,
    searchUserName: ""
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const results = await UserService.getUsersPage(0)
    setDetails((prevState) => {
      return {
        ...prevState,
        users: results.data.content,
        pageCount:0,
        isDataEnd: false,
        isSearchMode: false,
        searchUserName: ""
      }
    })

    toast(results.message);
  }




  const getOtherUser = async () => {
    if (details.isSearchMode) {
      getOtherUserWithSearch();
      return;
    }


    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await UserService.getUsersPage(details.pageCount + 1);
   //console.log(details);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          users: prevState.users.concat(result.data.content)
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

  const getOtherUserWithSearch = async () => {

    if (details.isDataEnd == true) {
      toast("All data listed");
      return;
    }

    var result = await UserService.getUserWithUserNameAndPaging(details.pageCount + 1,details.searchUserName);
   //console.log(details);
    if (result && result.data.empty == false) {
      setDetails((prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
          users: prevState.users.concat(result.data.content)
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


  const deleteUser = async (userId) => {

    const result = await UserService.deleteUser({
      id: userId
    });

    if (result.success != true) {
      toast(result.message);
      return;
    }

    toast(result.message);

    var users = details.users.filter((user) => {
      if (user.id !== userId) {
        return true
      }
      return false;
    });
   //console.log(users);
    setDetails((prevState) => {
      return {
        ...prevState,
        users: users
      };
    })


  }
  const updateUser = async (updateUserParam) => {

    const response = await UserService.updateUser(updateUserParam)
   //console.log(response);
    if(response.success == false){

      toast(response.message);

      return;
    }
    //console.log(response.message);
    toast(response.message);

    var users = details.users.map((user) => {
      if (user.id !== updateUserParam.id) {
        return user;
      }
      return updateUserParam;
    });

    setDetails((prevState) => {
      return {
        ...prevState,
        users: users
      };
    })

    
  }

  async function search(details) {
    if(details.userName.length == 0){
      getUsers();
      return;
    }

    const results = await UserService.getUserWithUserNameAndPaging(0, details.userName)
    setDetails({
      ...details,
      users: results.data.content,
      isSearchMode: true,
      pageCount: 0,
      searchUserName: details.userName
    })

    toast(results.message);
  }


  return (
    <div className="col-10 col-md-10">
      <ToastContainer />

      <UserFilter searchFunction={search} />
      <UserList users={details.users} deleteUserFunction={deleteUser} updateUserFunction={updateUser} />

      <div className="text-center">
        <button onClick={getOtherUser} className="btn btn-primary mt-4 mb-4">
          See More
        </button>
      </div>


    </div>
  );

}


export default UserManagement;