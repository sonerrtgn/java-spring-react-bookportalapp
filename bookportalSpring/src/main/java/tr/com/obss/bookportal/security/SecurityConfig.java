package tr.com.obss.bookportal.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import lombok.extern.slf4j.Slf4j;
import tr.com.obss.bookportal.model.Role;
import tr.com.obss.bookportal.model.User;
import tr.com.obss.bookportal.service.UserService;

@Configuration
@Slf4j
public class SecurityConfig {

	
	private UserService userService;
	
	@Autowired
	public SecurityConfig(UserService userService) {
		this.userService = userService;
	}
	
	
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, DaoAuthenticationProvider daoAuthenticationProvider) throws Exception {
		return http
				.cors()
				.and()
				.csrf()
				.disable()
				.sessionManagement() 
				.sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
				.and()
				.authorizeRequests()
				.antMatchers(HttpMethod.POST,"/api/v1/public/user")
				.permitAll()
				.antMatchers("/api/v1/user/**","/api/v1/public/auth/signin")
				.hasAnyRole("USER","ADMIN")
				.antMatchers("/api/v1/admin/**")
				.hasRole("ADMIN")
				.anyRequest()
				.denyAll()
				.and()
				.httpBasic()
				.and()
				.authenticationProvider(daoAuthenticationProvider)
				.build();
	}
	
	
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider(PasswordEncoder passwordEncoder,UserDetailsService userDetailsService) {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setPasswordEncoder(passwordEncoder); //kullanicilar eklenirken kullanilan sifreleme sinifi
		authenticationProvider.setUserDetailsService(userDetailsService);
		
		return authenticationProvider;
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		
		
		return username-> {

			final User user = userService.findByUserName(username);
			
			for(String role : rolesListToStringList(user.getRoles()) ) {
				log.info(role);
			}
			
			return new BookPortalUserDetails(user.getUserName(),user.getPassword(),rolesListToStringList(user.getRoles()));
		};
	}
	
	
	//Userin sahip olduugu Role'leri string listesine cevirir.
	public List<String> rolesListToStringList(List<Role> roles) {
		List<String> rolesString = new ArrayList<String>();
		for(Role role : roles) {
			rolesString.add(role.getRole().name());
		}
		
		return rolesString;
	}
	
}
