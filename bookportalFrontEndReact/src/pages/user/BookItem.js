

function BookItem(props) {
      const { title, numberOfPages, author, id } = props.details;
      const { deleteItemFunction } = props;

      //console.log(props.details);
      function deleteItem() {
           //console.log(deleteItemFunction);
            deleteItemFunction(id);
      }

      var infoElement = (
            <table className="table">

                  <tbody>
                        <tr>
                              <td>Title: </td>
                              <td>{title}</td>
                        </tr>
                        <tr>
                              <td>Author</td>
                              <td>{author.name}{author.surName}</td>
                        </tr>
                        <tr>

                              <td >Page size</td>
                              <td>{numberOfPages}</td>
                        </tr>
                  </tbody>
            </table>
      );

      return (


            <div className="col-12 col-sm-6 col-md-3">
                  <div className="card ms-2 mt-2" style={{ width: "100%", height: "auto", float: "left" }}>
                        <p className="text-center">
                              <img className="img" src="assets/image/reading-book.png" alt="book" style={{ width: "100px" }} />
                        </p>
                        <div className="card-body" style={{ paddingTop: "0px" }}>
                              <hr />
                              <div className="text-center">
                                    {infoElement}
                                    <hr />

                                    <div className="text-center">
                                          <button onClick={deleteItem} className="btn btn-danger">Delete</button>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default BookItem;