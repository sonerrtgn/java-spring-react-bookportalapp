package tr.com.obss.bookportal.mapper;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import tr.com.obss.bookportal.dto.DeleteBookDto;
import tr.com.obss.bookportal.model.Book;

@Component
public class BookMapper {
	private ModelMapper modelMapper;

	public BookMapper(ModelMapper modelMapper) {
		super();
		this.modelMapper = modelMapper;
	}
	
	public Book deleteBookDtoToBook(DeleteBookDto deleteBookDto) {
		return this.modelMapper.map(deleteBookDto, Book.class);
	}
	
}
