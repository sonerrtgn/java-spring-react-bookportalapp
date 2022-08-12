package tr.com.obss.bookportal.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
	List<Book> findByTitleContains(String title);

	Page<Book> findByTitleContaining(String title,Pageable pageable);

}
