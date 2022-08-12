import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import AddAuthor from "./add-author/AddAuthor";
import AddBook from "./add-book/AddBook";
import AddUser from "./add-user/AddUser";
import AuthorManagement from "./author-management/AuthorManagement";
import BookManagement from "./book-management/BookManagement";
import UserManagement from "./user-management/UserManagement";


function AdminApp() {


      return (
            <Router>
                  <div className="container-fluid">
                        <div className="row">
                              <HeaderAdmin />
                              <Routes>
                                    <Route path='/' element={<BookManagement />} />

                                    <Route path='/author-management' element={<AuthorManagement />} />
                                    <Route path='/book-management' element={<BookManagement />} />
                                    <Route path='/user-management' element={<UserManagement />} />

                                    <Route path='/add-book' element={<AddBook />} />
                                    <Route path='/add-author' element={<AddAuthor />} />
                                    <Route path='/add-user' element={<AddUser />} />


                              </Routes>
                        </div>
                  </div>
            </Router>
      );

}



export default AdminApp;