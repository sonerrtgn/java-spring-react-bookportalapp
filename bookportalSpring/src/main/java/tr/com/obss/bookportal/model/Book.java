package tr.com.obss.bookportal.model;




import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="books")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Book {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	
	@NotNull(message = "title is not null.")
	@Size(min = 3, message = "title cannot be less than 3 characters ")
	private String title;
	
	@NotNull(message = "numberOfPages is not null.")
	private int numberOfPages;
	

	@ManyToOne( cascade = CascadeType.MERGE)
    private Author author;

}
