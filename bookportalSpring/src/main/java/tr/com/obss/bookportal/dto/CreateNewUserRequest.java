package tr.com.obss.bookportal.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateNewUserRequest {

	@NotNull(message = "username connot be null")
	@Size(min = 4, message = "username cannot be less than 4 characters ")
	private String userName;
	
	@NotNull(message = "password connot be null")
	@Size(min = 4, message = "password cannot be less than 4 characters ")
	private String password;
	
}
