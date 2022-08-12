package tr.com.obss.bookportal.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.User;

public interface AuthorRepository extends JpaRepository<Author, Long> {

	List<Author> findByName(String name);
	
	Page<Author> findByNameContaining(String name,Pageable pageable);
}
