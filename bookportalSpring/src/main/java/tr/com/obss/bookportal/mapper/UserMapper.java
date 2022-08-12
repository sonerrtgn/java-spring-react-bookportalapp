package tr.com.obss.bookportal.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import tr.com.obss.bookportal.dto.CreateNewUserRequest;
import tr.com.obss.bookportal.dto.DeleteUserDto;
import tr.com.obss.bookportal.dto.UpdateUserDto;
import tr.com.obss.bookportal.model.User;

@Component
public class UserMapper {

	private ModelMapper modelMapper;

	public UserMapper(ModelMapper modelMapper) {
		super();
		this.modelMapper = modelMapper;
	}
	
	public User createNewUserRequestToUser(CreateNewUserRequest createNewUserRequset) {
		return this.modelMapper.map(createNewUserRequset, User.class);
	}
	
	public User deleteUserDtoToUser(DeleteUserDto deleteUserDto) {
		return this.modelMapper.map(deleteUserDto, User.class);
	}
	
	public User updateUserDtoToUser(UpdateUserDto updateUserDto) {
		return this.modelMapper.map(updateUserDto, User.class);
	}
	
	
}
