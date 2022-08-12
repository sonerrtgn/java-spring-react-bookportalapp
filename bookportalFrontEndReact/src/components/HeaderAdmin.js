import LocalStorageService from "../Service/LocalStorageService";
import HeaderItem from "./HeaderItem"
import "./HeaderAdmin.css";

function HeaderAdmin() {


      function logOut() {
            LocalStorageService.clearUser();
            window.location = "";
      }
      //                              <Link to="/book-management" style={{ width: "100%", color: "white" }}></link
      return (
            <>
                  <div className="col-2"></div>
                  <div className="col-2 left-navbar" >
                        <div className="row mt-3">
                        </div>

                        <div className="row">

                              <HeaderItem title="Authors" to="/author-management" image="assets/image/users.png" />

                              <HeaderItem title="Books" to="/book-management" image="assets/image/library-books-icon.png" />

                              <HeaderItem title="Users" to="/user-management" image="assets/image/user.png" />

                              <HeaderItem title="Add Author" to="/add-author" image="assets/image/add-user.png" />

                              <HeaderItem title="Add Book" to="/add-book" image="assets/image/add-book-icon.png" />

                              <HeaderItem title="Add User" to="/add-user" image="assets/image/add-user.png" />


                              <div className="col-3 col-md-12 header-item">
                                    <button className="btn mt-1 log-out-mobile" style={{ color: "white", fontSize: "12px" }} onClick={logOut}>
                                          <div className="row " >
                                                <div className="col-12 col-md-2">
                                                      <img src="assets/image/logout.png " alt="books icon" className="left-navbar-image"/>
                                                </div>
                                                <div className="col-12 col-md-9 left-navar-small-font">Log Out</div>
                                          </div>
                                    </button>
                              </div>
                        </div>
                  </div>
            </>
      );

}

export default HeaderAdmin;