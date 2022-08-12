package tr.com.obss.bookportal.service;

import java.util.List;

import org.springframework.data.domain.Page;

import tr.com.obss.bookportal.dto.SignInResponseDto;
import tr.com.obss.bookportal.dto.response.SuccessDataResponse;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;

public interface UserService {

	void addUser(User user);
	
	List<User> getAllUser();
	
	void addUserReadListWithUserName(String userName,long bookId);
	
	void substractUserReadListWithUserName(String userName,long bookId);
	
	void addUserFavoriteListWithUserName(String userName,long bookId);
	
	void substractFavoriteListWithUserName(String userName,long bookId);

	void update(User user);

	void delete(User user);

	User findByUserName(String username);
	
	List<Book> getReadingList(String userName);
	
	List<Book> getFavouriteList(String userName);
	
	Page<User> getAll(int pageNumber,int numberOfPage);

	Page<User> getAllContainsUserName(int pageNumber,int numberOfPage,String userName);

}
