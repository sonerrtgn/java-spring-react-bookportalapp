package tr.com.obss.bookportal.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String userName;
	
	private String password;
	
	
	@ManyToMany( cascade = CascadeType.ALL)
    private List<Role> roles = new ArrayList<>();
	
	@ManyToMany( cascade = CascadeType.ALL)
    private List<Book> readList = new ArrayList<>();
	
	@ManyToMany( cascade = CascadeType.ALL)
    private List<Book> favoriteList = new ArrayList<>();
	
	
	public boolean addReadList(Book book) {
		for(Book readListBook: this.readList) {
			if(readListBook.getId() == book.getId()) {
				return false;
			}
		}
		
		this.readList.add(book);
		return true;
	}
	
	public boolean addFovoriteList(Book book) {
		for(Book favouriteList: this.favoriteList) {
			if(favouriteList.getId() == book.getId()) {
				return false;
			}
		}
		this.favoriteList.add(book);
		return true;
	}
	
	public boolean substractReadList(Book book) {
		int count = 0;
		boolean isFound = false;
		for(Book readListBook : this.readList) {
			if(readListBook.getId() == book.getId()) {
				isFound = true;
				break;
			}
			count++;
		}
		
		if(isFound)
			this.readList.remove(count);
		
		return isFound;
	}
	
	public boolean substractFavoriteList(Book book) {
		int count = 0;
		boolean isFound = false;
		for(Book readListBook : this.favoriteList) {
			if(readListBook.getId() == book.getId()) {
				isFound = true;
				break;
			}
			count++;
		}
		
		if(isFound)
			this.favoriteList.remove(count);
		
		return isFound;
	}





}
