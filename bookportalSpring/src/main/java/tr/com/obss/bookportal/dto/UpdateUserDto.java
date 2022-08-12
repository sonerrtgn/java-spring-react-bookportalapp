package tr.com.obss.bookportal.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDto {
	
	@NotNull(message = "id connot be null")
	private Long id;
	
	@NotNull(message = "userName connot be null")
	private String userName;
	

}
