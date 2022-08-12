package tr.com.obss.bookportal.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import tr.com.obss.bookportal.model.Role;

@Getter
@Setter
@AllArgsConstructor
public class SignInResponseDto {

	private String[] roles;
}
