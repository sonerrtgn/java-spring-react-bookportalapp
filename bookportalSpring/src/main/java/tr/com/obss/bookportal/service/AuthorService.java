package tr.com.obss.bookportal.service;

import java.util.List;

import org.springframework.data.domain.Page;

import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;

public interface AuthorService {

	
	void add(Author author);
	
	List<Author> getAll();
	
	void delete(Author author);
	
	void update(Author author);
	
	List<Author> searchByName(String name);
	
	Page<Author> getAll(int pageNumber,int numberOfPage);

	Page<Author> getAllContainsName(int pageNumber,int numberOfPage,String name);

	
}
