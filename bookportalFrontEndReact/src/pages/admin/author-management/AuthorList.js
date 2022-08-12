import Author from "./Author";


function AuthorList(props) {


      const { authors, deleteAuthorFunction,updateAuthorFunction } = props;

      var numberOfAuthors = authors && authors.length;
      return (
            <div>
                  <h2 >There are {numberOfAuthors && numberOfAuthors} attached authors.</h2>

                  <div className="row">
                        {authors != null && authors.map(author => {
                              return (<Author details={author} key={author.id} deleteAuthorFunction={deleteAuthorFunction} updateAuthorFunction={updateAuthorFunction} />);
                        })}
                  </div>

            </div>
      );
}

export default AuthorList;