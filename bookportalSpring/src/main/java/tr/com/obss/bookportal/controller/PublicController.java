package tr.com.obss.bookportal.controller;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import tr.com.obss.bookportal.dto.CreateNewUserRequest;
import tr.com.obss.bookportal.dto.SignInResponseDto;
import tr.com.obss.bookportal.dto.response.DataResponse;
import tr.com.obss.bookportal.dto.response.Response;
import tr.com.obss.bookportal.dto.response.SuccessDataResponse;
import tr.com.obss.bookportal.dto.response.SuccessResponse;
import tr.com.obss.bookportal.mapper.UserMapper;
import tr.com.obss.bookportal.model.Book;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.service.UserService;

@RestController
@RequestMapping("/api/v1/public")
@CrossOrigin(maxAge = 3600)
@Slf4j
public class PublicController {

	private UserService userService;
	
	private UserMapper userMapper;
	
	
	@Autowired
	public PublicController(UserService userService, UserMapper userMapper) {
		super();
		this.userService = userService;
		this.userMapper = userMapper;
	}
	
	@PostMapping("/user")
	public Response addUser(@RequestBody @Valid CreateNewUserRequest createNewUserRequest) {
		
		User user = this.userMapper.createNewUserRequestToUser(createNewUserRequest);
		
		userService.addUser(user);
		
		return new SuccessResponse("Successfully added user.");
	}
	
	
	@PostMapping("/auth/signin")
	public Response login(Authentication authentication) {
		Collection<? extends GrantedAuthority> grantedAuthoritys =  authentication.getAuthorities();
		String[] roles = new String[grantedAuthoritys.size()];
		int count = 0;
		for(GrantedAuthority grantedAuthority  : grantedAuthoritys ) {
			roles[count++] = grantedAuthority.getAuthority().toString();
		}
		
		return new SuccessDataResponse<SignInResponseDto>(new SignInResponseDto(roles), "Your successfuly sign in");

	}
	

}
