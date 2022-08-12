package tr.com.obss.bookportal.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import tr.com.obss.bookportal.exceptions.AuthorNotFoundExceptions;
import tr.com.obss.bookportal.exceptions.BookNotFoundException;
import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.repository.AuthorRepository;
import tr.com.obss.bookportal.repository.BookRepository;
import tr.com.obss.bookportal.service.BookService;

@Service
public class BookServiceImpl implements BookService{

	
	private BookRepository bookRepository;
	private AuthorRepository authorRepository;
	
	
	@Autowired
	public BookServiceImpl(BookRepository bookRepository,AuthorRepository authorRepository) {
		super();
		this.bookRepository = bookRepository;
		this.authorRepository = authorRepository;
	}

	@Override
	public void add(Book book) {
		
		//yazar bulunamazsa exception firlatiyorum aksi takdirde jpa author olmadigi icin error atacaktir.
		Author autoher = this.authorRepository.findById(book.getAuthor().getId()).orElseThrow(AuthorNotFoundExceptions::new);
		
		this.bookRepository.save(book);
		
	}

	@Override
	public void delete(Book book) {
		this.bookRepository.findById(book.getId()).orElseThrow(BookNotFoundException::new);
		
		this.bookRepository.delete(book);
		
		
	}

	@Override
	public void update(Book book) {
		this.bookRepository.findById(book.getId()).orElseThrow(BookNotFoundException::new);
		
		Author author = this.authorRepository.findById(book.getAuthor().getId()).orElseThrow(AuthorNotFoundExceptions::new);
		book.setAuthor(author);
		
		this.bookRepository.save(book);
		
	}

	@Override
	public Page<Book> getAll(int pageNumber,int numberOfPages) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPages);
		return this.bookRepository.findAll(pageable);
		
	}
	
	@Override
	public Page<Book> getAllContainsTitle(int pageNumber, int numberOfPage, String title) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPage);
		
		return this.bookRepository.findByTitleContaining(title, pageable);
		
	}


	




	
	
	
	
	
}
