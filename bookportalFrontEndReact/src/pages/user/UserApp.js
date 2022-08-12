import HeaderUser from "../../components/HeaderUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookManagement from "./BookManagament/BookManagement";
import FavoriteList from "./favorite-list/FavoriteList";
import ReadingList from "./reading-list/ReadingList";


function UserApp() {
      return (

            <Router>
                  <div className="container-fluid">
                        <div className="row">
                              <HeaderUser />
                              <Routes>
                                    <Route path='/' element={<BookManagement />} />

                                    <Route path='/book-management' element={<BookManagement />} />

                                    <Route path='/favorite-list' element={<FavoriteList />} />

                                    <Route path='/reading-list' element={<ReadingList />} />


                              </Routes>
                        </div>
                  </div>
            </Router>
      );
}


export default UserApp;