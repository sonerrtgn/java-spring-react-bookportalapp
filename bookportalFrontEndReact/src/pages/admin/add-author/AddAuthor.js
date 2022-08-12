import AddAuthorCard from "./AddAuthorCard";
import AuthorService from "../../../Service/AuthorService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAuthor() {


      const addAuthor = async (newAuthor) => {
            //console.log(newAuthor);
            var response = await AuthorService.addAuthor(newAuthor);
           //console.log(response)
            if(response){
                  toast(response.message);
            }else{
                  toast("Unkown error");
            }
      }


      return (
            <div className="col-10">
                  <ToastContainer />
                  <AddAuthorCard addAuthorFunction={addAuthor} />
            </div>
      );
}

export default AddAuthor;