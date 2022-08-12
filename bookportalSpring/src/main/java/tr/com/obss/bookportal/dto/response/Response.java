package tr.com.obss.bookportal.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Response {

	private boolean success;
	private String message;
	
	
	public Response(boolean success,String message) {
		this.setMessage(message);
		this.setSuccess(success);
	}
	
}
