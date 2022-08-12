package tr.com.obss.bookportal.dto;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	
	@NotNull(message = "id connot be null")
	private Long id;
	
	@NotNull(message = "userName connot be null")
	private String userName;
	
	
	
	

}
