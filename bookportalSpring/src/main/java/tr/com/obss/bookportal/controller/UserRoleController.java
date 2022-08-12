package tr.com.obss.bookportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import tr.com.obss.bookportal.dto.response.DataResponse;
import tr.com.obss.bookportal.dto.response.Response;
import tr.com.obss.bookportal.dto.response.SuccessDataResponse;
import tr.com.obss.bookportal.dto.response.SuccessResponse;
import tr.com.obss.bookportal.mapper.UserMapper;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.service.BookService;
import tr.com.obss.bookportal.service.UserService;

@RequestMapping("/api/v1/user")
@RestController
@Slf4j
@CrossOrigin(maxAge = 3600)
public class UserRoleController {

	
	private UserService userService;
	private BookService bookService;

	
	private UserMapper userMapper;
	
	
	@Autowired
	public UserRoleController(UserService userService, UserMapper userMapper,BookService bookService) {
		super();
		this.userService = userService;
		this.userMapper = userMapper;
		this.bookService = bookService;
	}
	
	
	@GetMapping("/book/page")
	public DataResponse<Page<Book>> getBookWithPage(@RequestParam("page") int page,@RequestParam("numberOfData") int numberOfData){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Book>>(bookService.getAll(page,numberOfData),"Successfully listed books.");

	}
	
	@GetMapping("/user/readingList")
	public DataResponse<List<Book>> getUserReadingList(Authentication authentication){
		List<Book> readingList = this.userService.getReadingList(authentication.getName());
		
		return new SuccessDataResponse<List<Book>>(readingList,"Successfully listed reading list.");

	}
	
	@PostMapping("/user/readingList/{bookId}")
	public Response addReadingList(Authentication authentication,@PathVariable long bookId) {
		
		String loginUserName = authentication.getName();
		this.userService.addUserReadListWithUserName(loginUserName, bookId);
		
		return new SuccessResponse("Successfully added reading list.");
	}
	
	
	@DeleteMapping("/user/readingList/{bookId}")
	public Response subtractReadList(Authentication authentication,@PathVariable long bookId) {
		
		String loginUserName = authentication.getName();
		this.userService.substractUserReadListWithUserName(loginUserName, bookId);
		
		return new SuccessResponse("Successfully substract reading list.");
	}
	
	@GetMapping("/user/favoriteList")
	public DataResponse<List<Book>> getUserFavouriteList(Authentication authentication){
		List<Book> favoriteList = this.userService.getFavouriteList(authentication.getName());
		
		return new SuccessDataResponse<List<Book>>(favoriteList,"Successfully listed favourite list.");

	}
	
	@PostMapping("/user/favoriteList/{bookId}")
	public Response addFavoriteList(Authentication authentication,@PathVariable long bookId) {
		
		String loginUserName = authentication.getName();
		this.userService.addUserFavoriteListWithUserName(loginUserName, bookId);
		
		return new SuccessResponse("Successfully added favorite list.");
	}
	
	@DeleteMapping("/user/favoriteList/{bookId}")
	public Response subtractFavoriteList(Authentication authentication,@PathVariable long bookId) {
		
		String loginUserName = authentication.getName();
		this.userService.substractFavoriteListWithUserName(loginUserName, bookId);
		
		return new SuccessResponse("Successfully substract favorite list.");
	}
	
	@GetMapping("/book/page/search/{title}")
	public DataResponse<Page<Book>> getBookWithPageAndTitle(@RequestParam("page") int page,
			@RequestParam("numberOfData") int numberOfData,
			@PathVariable String title){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Book>>(bookService.getAllContainsTitle(page, numberOfData, title),"Successfully listed books.");

	}

	
}
