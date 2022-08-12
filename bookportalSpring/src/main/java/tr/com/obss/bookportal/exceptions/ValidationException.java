package tr.com.obss.bookportal.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.extern.slf4j.Slf4j;
import tr.com.obss.bookportal.dto.response.ErrorResponse;

@RestControllerAdvice
@Slf4j
public class ValidationException {

	@ExceptionHandler(MethodArgumentNotValidException.class )
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ErrorResponse handleValidError(MethodArgumentNotValidException ex){
		return new ErrorResponse(ex.getAllErrors().get(0).getDefaultMessage(),0l);

	}
}
