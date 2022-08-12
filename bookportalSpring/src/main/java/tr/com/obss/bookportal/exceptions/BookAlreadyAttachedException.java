package tr.com.obss.bookportal.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import tr.com.obss.bookportal.dto.response.ErrorResponse;

@ControllerAdvice
@ResponseBody
public class BookAlreadyAttachedException extends RuntimeException{
	
	 @ExceptionHandler(BookAlreadyAttachedException.class )
	  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	  public ErrorResponse handleUserNotFound(BookAlreadyAttachedException ex,HttpServletRequest request) {
			
		  return new ErrorResponse("The book is already attached ",20000003l);
	  }
}
