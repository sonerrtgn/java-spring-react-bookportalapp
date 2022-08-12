package tr.com.obss.bookportal.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import tr.com.obss.bookportal.dto.AuthorDto;
import tr.com.obss.bookportal.dto.DeleteAuthorDto;
import tr.com.obss.bookportal.model.Author;

@Component
public class AuthorMapper {

	private ModelMapper modelMapper;
	
	public AuthorMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}
	
	public Author deleteAuthorDtoToAuthor(DeleteAuthorDto deleteAuthorDto) {
		return this.modelMapper.map(deleteAuthorDto, Author.class);
	}
	
	public Author authorDtoToAuthor(AuthorDto authorDto) {
		return this.modelMapper.map(authorDto, Author.class);
	}
}
