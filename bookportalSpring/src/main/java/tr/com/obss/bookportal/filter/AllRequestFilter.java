package tr.com.obss.bookportal.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;


public class AllRequestFilter implements Filter{

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {

	        HttpServletRequest request = (HttpServletRequest) req;
	        HttpServletResponse response = (HttpServletResponse) res;
	
	        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
	        response.setHeader("Access-Control-Allow-Credentials", "true");
	        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
	        response.setHeader("Access-Control-Max-Age", "3600");
	        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me, Authorization, x-auth-token");
	
	        System.out.println("cors filter called");
	        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
	         response.setStatus(HttpServletResponse.SC_OK);
	        }else {
	            chain.doFilter(req, res);
	       }
		
		
		
	}

}
