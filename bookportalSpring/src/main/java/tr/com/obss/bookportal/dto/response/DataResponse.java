package tr.com.obss.bookportal.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DataResponse<T> extends Response{
	
	private T data;
	
	public DataResponse(T data,boolean success, String message) {
		super(success,message);
		this.setData(data);
	}
}	
