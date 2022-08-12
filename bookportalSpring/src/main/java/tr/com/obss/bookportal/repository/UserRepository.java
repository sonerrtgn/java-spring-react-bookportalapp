package tr.com.obss.bookportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	
	Optional<User> findByUserName(String userName);
	
	Page<User> findByUserNameContaining(String name,Pageable pageable);


	
	
}
