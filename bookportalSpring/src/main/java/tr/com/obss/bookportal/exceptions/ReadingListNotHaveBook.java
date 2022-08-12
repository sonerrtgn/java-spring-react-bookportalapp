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
public class ReadingListNotHaveBook extends RuntimeException {

	
	  @ExceptionHandler(ReadingListNotHaveBook.class )
	  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	  public ErrorResponse handleUserNotFound(ReadingListNotHaveBook ex,HttpServletRequest request) {
			
		  return new ErrorResponse("This book is does not have reading book list.",2000001l);
	  }
}

