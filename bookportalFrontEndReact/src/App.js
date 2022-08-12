
import AdminApp from "./pages/admin/AdminApp";
import UserApp from "./pages/user/UserApp";
import Home from "./pages/Home";
import LocalStorageService from "./Service/LocalStorageService";
import { Component, useEffect, useState } from "react";


class App extends Component{
      constructor(props){
            super(props);
            this.state = {
                  loginInfo:{
                        isLogin:false,
                        role: null,
                        token: null
                  }
            }

            this.updateLoginInfo = this.updateLoginInfo.bind(this);
      }

      componentDidMount(){
            if(LocalStorageService.getUser() != null){
                  this.setState({
                        loginInfo:LocalStorageService.getUser()
                  });
            }
      }

      updateLoginInfo(newInfo){
            this.setState({
                  loginInfo:newInfo
            });
            LocalStorageService.setUser({
                  isLogin:newInfo.isLogin,
                  role:newInfo.role,
                  token:newInfo.token
            });

            //console.log(LocalStorageService.getUser());

      }

      render(){
            var page;
            if (this.state.loginInfo.isLogin && this.state.loginInfo.role === "ADMIN") {
                  //console.log("is admin");
                  page = <AdminApp />
            } else if (this.state.loginInfo.isLogin) {
                  //console.log("is user");
                  page = <UserApp />
            } else {
                  //console.log("is anonim");
      
                  page = <Home updateLoginInfoFunction={this.updateLoginInfo}/>
            }
      
            
      
            return page;
      }

}

/*
function App() {

      const [loginInfo,setLoginInfo] = useState({isLogin:false,role:null,token:null});

      var page;
      useEffect(() => {
            if(LocalStorageService.getUser() != null){
                  setLoginInfo(LocalStorageService.getUser());
            }
      });
      function updateLoginInfo(newInfo){
            setLoginInfo(newInfo);
            LocalStorageService.setUser({
                  isLogin:newInfo.isLogin,
                  role:newInfo.role,
                  token:newInfo.token
            });

            console.log(LocalStorageService.getUser());

      }


      if (loginInfo.isLogin && loginInfo.role === "ADMIN") {
            console.log("is admin");
            page = <AdminApp />
      } else if (loginInfo.isLogin) {
            console.log("is user");
            page = <UserApp />
      } else {
            console.log("is anonim");

            page = <Login updateLoginInfoFunction={updateLoginInfo}/>
      }

      

      return page;

}


/**
 * <Router>
                  <div className="container-fluid">
                        <div className="row">
                              <Header />
                              <Routes>
                                    <Route path='/book-management' element={<BookManagement />} />
                              </Routes>
                        </div>
                  </div>
            </Router>
 */


export default App;