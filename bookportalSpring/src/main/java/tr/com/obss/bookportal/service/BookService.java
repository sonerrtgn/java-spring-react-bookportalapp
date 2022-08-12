package tr.com.obss.bookportal.service;

import java.util.List;

import org.springframework.data.domain.Page;

import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;

public interface BookService {

	void add(Book book);
	
	void delete(Book book);
	
	void update(Book book);
	
	Page<Book> getAll(int pageNumber,int numberOfPage);
	
	Page<Book> getAllContainsTitle(int pageNumber,int numberOfPage,String title);

	
}
