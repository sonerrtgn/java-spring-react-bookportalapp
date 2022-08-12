package tr.com.obss.bookportal.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse extends Response{

	private long errorCode;
	
	public ErrorResponse() {
		this.setSuccess(false);
		this.setErrorCode(0L);
	}
	
	public ErrorResponse(String message,long errorCode) {
		super(false,message);
		this.setErrorCode(errorCode);
	}
	
}
