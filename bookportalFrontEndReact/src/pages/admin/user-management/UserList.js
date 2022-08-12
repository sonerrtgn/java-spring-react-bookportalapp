import User from "./User";


function UserList(props) {


      const { users, deleteUserFunction,updateUserFunction } = props;
      //console.log(updateUserFunction);
      var numberOfUsers = users && users.length;
      return (
            <div>
                  <h2 >There are {numberOfUsers && numberOfUsers} attached users.</h2>

                  <div className="row">
                        {users != null && users.map(user => {
                              return (<User details={user} key={user.id} deleteUserFunction={deleteUserFunction} updateUserFunction={updateUserFunction} />);
                        })}
                  </div>

            </div>
      );
}

export default UserList;