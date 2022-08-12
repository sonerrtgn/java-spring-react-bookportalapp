package tr.com.obss.bookportal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="authors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Author {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "name is not null.")
	@Size(min = 3, message = "name cannot be less than 3 characters ")
	private String name;
	
	@NotNull(message = "surName is not null.")
	@Size(min = 3, message = "userName cannot be less than 3 characters ")
	private String surName;
	

	private java.sql.Date birthDate;
	
	
}
