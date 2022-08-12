package tr.com.obss.bookportal.dto.response;

public class SuccessResponse extends Response{

	public SuccessResponse() {
		this.setSuccess(true);
	}
	
	public SuccessResponse(String message) {
		super(true,message);
	}
}
