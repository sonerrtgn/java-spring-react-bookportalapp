package tr.com.obss.bookportal.dto.response;

public class ErrorDataResponse<T> extends DataResponse<T> {

	public ErrorDataResponse(String message, T data) {
		super(data, false, message);
	}


}
