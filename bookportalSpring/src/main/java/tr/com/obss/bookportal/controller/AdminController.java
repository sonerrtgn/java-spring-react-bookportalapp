package tr.com.obss.bookportal.controller;

import java.util.List;
import java.util.function.Function;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tr.com.obss.bookportal.dto.AuthorDto;
import tr.com.obss.bookportal.dto.CreateNewUserRequest;
import tr.com.obss.bookportal.dto.DeleteAuthorDto;
import tr.com.obss.bookportal.dto.DeleteBookDto;
import tr.com.obss.bookportal.dto.DeleteUserDto;
import tr.com.obss.bookportal.dto.UpdateUserDto;
import tr.com.obss.bookportal.dto.UserDto;
import tr.com.obss.bookportal.dto.response.DataResponse;
import tr.com.obss.bookportal.dto.response.Response;
import tr.com.obss.bookportal.dto.response.SuccessDataResponse;
import tr.com.obss.bookportal.dto.response.SuccessResponse;
import tr.com.obss.bookportal.mapper.AuthorMapper;
import tr.com.obss.bookportal.mapper.BookMapper;
import tr.com.obss.bookportal.mapper.UserMapper;
import tr.com.obss.bookportal.model.Author;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.service.AuthorService;
import tr.com.obss.bookportal.service.BookService;
import tr.com.obss.bookportal.service.UserService;

@RequestMapping("/api/v1/admin")
@RestController
@CrossOrigin(maxAge = 3600)
public class AdminController {

	

	private UserService userService;
	
	private BookService bookService;
	
	private AuthorService authorService;
	
	
	private AuthorMapper authorMapper;
	
	private UserMapper userMapper;
	
	private BookMapper bookMapper;

	
	
	@Autowired
	public AdminController(UserService userService, UserMapper userMapper,BookService bookService,AuthorService authorService, AuthorMapper authorMapper,
			BookMapper bookMapper) {
		super();
		this.userService = userService;
		this.userMapper = userMapper;
		this.bookService = bookService;
		this.authorService = authorService;
		this.authorMapper = authorMapper;
		this.bookMapper = bookMapper;
	}
	
	
	
	@PostMapping("/author")
	public Response addAuthor(@RequestBody AuthorDto authorDto) {
		Author author = this.authorMapper.authorDtoToAuthor(authorDto);
		this.authorService.add(author);
		
		return new SuccessResponse("Successfuly added author.");
	}
	
	@GetMapping("/author")
	public DataResponse<List<Author>> getAllAuthor(){
		return new SuccessDataResponse<List<Author>>(this.authorService.getAll(),"Successfully listed authors.");
	}

	@GetMapping("/author/page")
	public DataResponse<Page<Author>> getAuthorWithPage(@RequestParam("page") int page,@RequestParam("numberOfData") int numberOfData){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Author>>(authorService.getAll(page, numberOfData),"Successfully listed author.");

	}
	
	@DeleteMapping("/author/{authorId}")
	public Response addAuthor(@PathVariable long authorId) {
		
		Author author = new Author();
		author.setId(authorId);
		
		this.authorService.delete(author);
		
		return new SuccessResponse("Successfuly Deleted author.");
	}
	
	@PostMapping("/author/update")
	public Response updateAuthor(@RequestBody @Valid Author author) {
		
		
		this.authorService.update(author);
		
		return new SuccessResponse("Successfuly Updadted author.");
	}
	
	
	
	
	
	@PostMapping("/book")
	public Response addBook(@RequestBody Book book) {
		
		this.bookService.add(book);
		
		return new SuccessResponse("Successfuly added book");
	}
	
	
	@GetMapping("/book/page")
	public DataResponse<Page<Book>> getBookWithPage(@RequestParam("page") int page,@RequestParam("numberOfData") int numberOfData){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Book>>(bookService.getAll(page,numberOfData),"Successfully listed books.");

	}
	

	@GetMapping("/book/page/search/{title}")
	public DataResponse<Page<Book>> getBookWithPageAndTitle(@RequestParam("page") int page,
			@RequestParam("numberOfData") int numberOfData,
			@PathVariable String title){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Book>>(bookService.getAllContainsTitle(page, numberOfData, title),"Successfully listed users.");

	}
	
	@GetMapping("/author/page/search/{name}")
	public DataResponse<Page<Author>> getAuthorWithPageAndName(@RequestParam("page") int page,
			@RequestParam("numberOfData") int numberOfData,
			@PathVariable String name){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<Author>>(authorService.getAllContainsName(page, numberOfData, name),"Successfully listed users.");

	}
	

	@PostMapping("/book/update")
	public Response updateBook(@RequestBody Book book) {
		
		
		this.bookService.update(book);
		
		return new SuccessResponse("Successfully book updated");
	}
	
	
	
	@DeleteMapping("/book/{bookId}")
	public Response deletBook(@PathVariable long bookId) {
		
		Book book = new Book();
		book.setId(bookId);
		
		this.bookService.delete(book);
		
		return new SuccessResponse("Successfully book deleted");
	}
	
	
	

	@PostMapping("/user")
	public Response addUser(@RequestBody @Valid CreateNewUserRequest createNewUserRequest) {
		
		User user = this.userMapper.createNewUserRequestToUser(createNewUserRequest);
		
		userService.addUser(user);
		
		return new SuccessResponse("Successfully added user.");
	}
	
	@GetMapping("/user")
	public DataResponse<List<User>> getAll(){
		
		return new SuccessDataResponse<List<User>>(userService.getAllUser(),"Successfully listed user.");

	}
	
	@GetMapping("/user/page")
	public DataResponse<Page<User>> getUserWithPage(@RequestParam("page") int page,@RequestParam("numberOfData") int numberOfData){
		
		//log.info("Loginng user name: "+ authentication.getName());
		
		Page<User> pageUsers = this.userService.getAll(page, numberOfData);
		List<User> listUser= pageUsers.getContent();
		for(User user : listUser) {
			user.setPassword("");
			
		}
		/*
		Page<UserDto> dtoPage = users.map(new Converter<User, UserDto>() {
		    public UserDto convert(User user) {
		    	ModelMapper m = new ModelMapper();
		    	
		        return m.map(user, UserDto.class);
		    }
		});		return new SuccessDataResponse<Page<User>>(users,"Successfully listed books.");
		 	*/
		return new SuccessDataResponse<Page<User>>(pageUsers,"Successfully listed books.");
	}
	
	@GetMapping("/user/page/search/{userName}")
	public DataResponse<Page<User>> getUserWithPageAndUserName(@RequestParam("page") int page,
			@RequestParam("numberOfData") int numberOfData,
			@PathVariable String userName){
		
		//log.info("Loginng user name: "+ authentication.getName());
		return new SuccessDataResponse<Page<User>>(userService.getAllContainsUserName(page, numberOfData, userName),"Successfully listed users.");

	}
	
	@PostMapping("/user/update")
	public Response updateUser(@RequestBody @Valid UpdateUserDto updateUserDto) {
				
		User user = this.userMapper.updateUserDtoToUser(updateUserDto);

		this.userService.update(user);
		return new SuccessResponse("Successfully user updated.");
	}
	
	
	@DeleteMapping("/user/{userId}")
	public Response deleteUser(@PathVariable long userId) {
		
		User user = new User();
		user.setId(userId);
		this.userService.delete(user);
		return new SuccessResponse("successfully removed User");

	}	

	
}
