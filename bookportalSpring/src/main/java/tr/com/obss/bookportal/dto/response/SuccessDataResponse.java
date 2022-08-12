package tr.com.obss.bookportal.dto.response;

public class SuccessDataResponse<T> extends DataResponse<T>{

	public SuccessDataResponse(T data, String message) {
		super(data, true, message);
		// TODO Auto-generated constructor stub
	}

}
