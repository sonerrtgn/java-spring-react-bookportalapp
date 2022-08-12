import Book from "./Book";


function BookList(props) {


      const { books, deleteBookFunction,updateBookFunction,authors } = props;

      var numberOfBook = books && books.length;

      //console.log(authors);
      return (
            <div>
                  <h2 className="text-center">There are {numberOfBook && numberOfBook} attached books.</h2>

                  <div className="row">
                        {books != null && books.map(book => {
                              return (<Book details={book} authors={authors} key={book.id} deleteBookFunction={deleteBookFunction} updateBookFunction={updateBookFunction} />);
                        })}
                  </div>

            </div>
      );
}

export default BookList;