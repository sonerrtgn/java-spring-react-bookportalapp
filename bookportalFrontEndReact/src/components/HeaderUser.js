import LocalStorageService from "../Service/LocalStorageService";
import HeaderItem from "./HeaderItem"
import "./HeaderAdmin.css";

function HeaderUser() {


      function logOut() {
            LocalStorageService.clearUser();
            window.location = "";
      }
      //                              <Link to="/book-management" style={{ width: "100%", color: "white" }}></link
      return (
            <>
                  <div className="col-2"></div>
                  <div className="col-2 col-md-2 left-navbar" >
                        <div className="row mt-3">
                        </div>

                        <div className="row">


                              <HeaderItem title="Books" to="/book-management" image="assets/image/library-books-icon.png" />

                              <HeaderItem title="Favorite List" to="/favorite-list" image="assets/image/favourite.png" />

                              <HeaderItem title="Reading List" to="/reading-list" image="assets/image/reading-user.png" />




                              <div className="col-3 col-md-12  header-item">
                                    <button className="btn mt-3" style={{ color: "white", fontSize: "12px" }} onClick={logOut}>
                                          <div className="row " >
                                                <div className="col-2">
                                                      <img src="assets/image/logout.png" className="left-navbar-image" alt="books icon" style={{ width: "24px" }} />
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

export default HeaderUser;