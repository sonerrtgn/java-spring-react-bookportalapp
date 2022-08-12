import Book from "./Book";


function BookList(props) {


      const { books, addToReadingListFunction,addToFavouriteListFunction } = props;

      var numberOfBook = books && books.length;
      return (
            <div>
                  <h2 className="text-center">There are {numberOfBook && numberOfBook} attached books.</h2>

                  <div className="row">
                        {books != null && books.map(book => {
                              return (<Book details={book} key={book.id} addToReadingListFunction={addToReadingListFunction} addToFavouriteListFunction={addToFavouriteListFunction} />);
                        })}
                  </div>

            </div>
      );
}

export default BookList;