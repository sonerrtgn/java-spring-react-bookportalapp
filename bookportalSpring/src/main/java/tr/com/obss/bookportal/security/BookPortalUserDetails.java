package tr.com.obss.bookportal.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class BookPortalUserDetails implements UserDetails {

	private String username;
	private String password;
	private List<String> roles;
	
	public BookPortalUserDetails(String username,String password,List<String> roles) {
		this.username = username;
		this.password = password;
		this.roles    = roles;
	}
	
	
	
	//role olarak gelen string listesini GrantedAuthority Listesine cevirir.
	public List<GrantedAuthority> stringToGrantedAuthority(){
		List<GrantedAuthority> grantedAuthoritys = new ArrayList<GrantedAuthority>();
		
		for(String role : roles) {
			grantedAuthoritys.add(new GrantedAuthority() {
				
				@Override
				public String getAuthority() {
					// TODO Auto-generated method stub

					return role;
				}
			});
		}
		
		
		return grantedAuthoritys;
	}
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return stringToGrantedAuthority();
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
