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
public class AuthorDto {

	
	@NotNull(message = "name is not null.")
	@Size(min = 3, message = "name cannot be less than 3 characters ")
	private String name;
	
	@NotNull(message = "surName is not null.")
	@Size(min = 3, message = "userName cannot be less than 3 characters ")
	private String surName;
	
	@NotNull(message = "birthDate is not null.")
	private java.sql.Date birthDate;
}
