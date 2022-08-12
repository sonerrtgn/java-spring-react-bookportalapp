package tr.com.obss.bookportal.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import tr.com.obss.bookportal.exceptions.AuthorNotFoundExceptions;
import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.repository.AuthorRepository;
import tr.com.obss.bookportal.service.AuthorService;


@Service
public class AuthorServiceImpl implements AuthorService{

	private AuthorRepository authorRepository;
	
	
	@Autowired
	public AuthorServiceImpl(AuthorRepository authorRepository) {
		super();
		this.authorRepository = authorRepository;
	}



	@Override
	public void add(Author author) {
		this.authorRepository.save(author);
	}



	@Override
	public void delete(Author author) {
		
		this.authorRepository.delete(author);
		
	}



	@Override
	public void update(Author author) {

		this.authorRepository.findById(author.getId()).orElseThrow(AuthorNotFoundExceptions::new);
		
		this.authorRepository.save(author);
		
	}



	@Override
	public List<Author> searchByName(String name) {

		return this.authorRepository.findByName(name);
	
	}



	@Override
	public List<Author> getAll() {
		// TODO Auto-generated method stub
		return this.authorRepository.findAll();
	}

	
	@Override
	public Page<Author> getAllContainsName(int pageNumber, int numberOfPage, String name) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPage);
		
		return this.authorRepository.findByNameContaining(name, pageable);
		
	}



	@Override
	public Page<Author> getAll(int pageNumber, int numberOfPage) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPage);

		return this.authorRepository.findAll(pageable);
	}



}
