package tr.com.obss.bookportal.service.imp;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tr.com.obss.bookportal.dto.SignInResponseDto;
import tr.com.obss.bookportal.dto.response.SuccessDataResponse;
import tr.com.obss.bookportal.exceptions.BookAlreadyAttachedException;
import tr.com.obss.bookportal.exceptions.BookNotFoundException;
import tr.com.obss.bookportal.exceptions.FavoriteListNotHaveBook;
import tr.com.obss.bookportal.exceptions.ReadingListNotHaveBook;
import tr.com.obss.bookportal.exceptions.UserNamePasswordFalse;
import tr.com.obss.bookportal.exceptions.UserNameUsedException;
import tr.com.obss.bookportal.exceptions.UserNotFoundExceptions;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.Role;
import tr.com.obss.bookportal.model.RoleType;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.repository.BookRepository;
import tr.com.obss.bookportal.repository.UserRepository;
import tr.com.obss.bookportal.service.RoleService;
import tr.com.obss.bookportal.service.UserService;

@Service
@Slf4j
public class UserServiceImpl implements UserService {


	private RoleService roleService;
	
	private UserRepository userRepository;
	
	private BookRepository bookRepository;
	
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	public UserServiceImpl(RoleService roleService,UserRepository userRepository,BookRepository bookRepository,PasswordEncoder passwordEncoder) {
		super();
		this.roleService = roleService;
		this.userRepository = userRepository;
		this.bookRepository = bookRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void addUser(User user) {
		
		if(this.userRepository.findByUserName(user.getUserName()).isPresent()) {
			
			//log.info(this.userRepository.findByUserName(user.getUserName()).toString());
			throw new UserNameUsedException();
		}
			
		
		Role userRole = roleService.findById(2L);
		
		List<Role> roleList = new ArrayList<Role>();
		if(this.getAllUser().size() == 0) {
			roleList.add(roleService.findById(1L));
		}
		roleList.add(userRole);
		
		user.setRoles(roleList);
		
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		
		userRepository.save(user);
	}
	

	

	@Override
	public List<User> getAllUser() {
		return this.userRepository.findAll();
	}



	@Override
	public void update(User user) {
		
		this.userRepository.findById(user.getId()).orElseThrow(UserNotFoundExceptions::new);
		
		if(!this.userRepository.findByUserName(user.getUserName()).isEmpty() ) {
			throw new UserNameUsedException();
		}
		
		this.userRepository.save(user);
	}




	@Override
	public void delete(User user) {
		this.userRepository.delete(user);
	}
	
	
	public User findByUserName(String userName) {
		return this.userRepository.findByUserName(userName).orElseThrow(UserNotFoundExceptions::new);
	}

	@Override
	public void addUserReadListWithUserName(String userName, long bookId) {
		User user = this.userRepository.findByUserName(userName).orElseThrow(UserNotFoundExceptions::new);
		
		Book book = this.bookRepository.findById(bookId).orElseThrow(BookNotFoundException::new);
		
		if(!user.addReadList(book)) {
			throw new BookAlreadyAttachedException();
		}
		
		this.userRepository.save(user);
			
	}

	@Override
	public void substractUserReadListWithUserName(String userName, long bookId) {
		User user = this.userRepository.findByUserName(userName).orElseThrow(UserNotFoundExceptions::new);
		Book book = this.bookRepository.findById(bookId).orElseThrow(BookNotFoundException::new);
		
		if(!user.substractReadList(book))
			throw new FavoriteListNotHaveBook();
		this.userRepository.save(user);

	}

	@Override
	public void addUserFavoriteListWithUserName(String userName, long bookId) {
		User user = this.userRepository.findByUserName(userName).orElseThrow(UserNotFoundExceptions::new);
		Book book = this.bookRepository.findById(bookId).orElseThrow(BookNotFoundException::new);
		
		if(!user.addFovoriteList(book)) {
			throw new BookAlreadyAttachedException();
	
		}
		
		
		this.userRepository.save(user);		
	}

	@Override
	public void substractFavoriteListWithUserName(String userName, long bookId) {
		User user = this.userRepository.findByUserName(userName).orElseThrow(UserNotFoundExceptions::new);
		Book book = this.bookRepository.findById(bookId).orElseThrow(BookNotFoundException::new);
		
		if(!user.substractFavoriteList(book))
			throw new FavoriteListNotHaveBook();	
		
		this.userRepository.save(user);
	}

	@Override
	public List<Book> getReadingList(String userName) {

		User user = this.findByUserName(userName);
		
		return user.getReadList();
	}

	@Override
	public List<Book> getFavouriteList(String userName) {
		User user = this.findByUserName(userName);
		
		return user.getFavoriteList();
	}

	@Override
	public Page<User> getAll(int pageNumber,int numberOfPages) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPages);
		return this.userRepository.findAll(pageable);
		
	}

	@Override
	public Page<User> getAllContainsUserName(int pageNumber, int numberOfPage, String userName) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, numberOfPage);
		
		return this.userRepository.findByUserNameContaining(userName,pageable);
	}

	



	

	
	
	

	

}
