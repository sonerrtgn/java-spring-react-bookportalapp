# Details

Date : 2022-08-12 20:03:15

Directory c:\\Users\\soner\\Desktop\\javaProjexts\\soner.tugan\\bookportal\\src\\main\\java\\tr\\com\\obss\\bookportal

Total : 51 files,  1420 codes, 91 comments, 734 blanks, all 2245 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [src/main/java/tr/com/obss/bookportal/BookportalApplication.java](/src/main/java/tr/com/obss/bookportal/BookportalApplication.java) | Java | 9 | 0 | 7 | 16 |
| [src/main/java/tr/com/obss/bookportal/config/AppConfig.java](/src/main/java/tr/com/obss/bookportal/config/AppConfig.java) | Java | 28 | 0 | 11 | 39 |
| [src/main/java/tr/com/obss/bookportal/controller/AdminController.java](/src/main/java/tr/com/obss/bookportal/controller/AdminController.java) | Java | 156 | 15 | 88 | 259 |
| [src/main/java/tr/com/obss/bookportal/controller/PublicController.java](/src/main/java/tr/com/obss/bookportal/controller/PublicController.java) | Java | 53 | 0 | 20 | 73 |
| [src/main/java/tr/com/obss/bookportal/controller/UserRoleController.java](/src/main/java/tr/com/obss/bookportal/controller/UserRoleController.java) | Java | 84 | 2 | 39 | 125 |
| [src/main/java/tr/com/obss/bookportal/dto/AuthorDto.java](/src/main/java/tr/com/obss/bookportal/dto/AuthorDto.java) | Java | 23 | 0 | 8 | 31 |
| [src/main/java/tr/com/obss/bookportal/dto/CreateNewUserRequest.java](/src/main/java/tr/com/obss/bookportal/dto/CreateNewUserRequest.java) | Java | 21 | 0 | 7 | 28 |
| [src/main/java/tr/com/obss/bookportal/dto/DeleteAuthorDto.java](/src/main/java/tr/com/obss/bookportal/dto/DeleteAuthorDto.java) | Java | 18 | 0 | 7 | 25 |
| [src/main/java/tr/com/obss/bookportal/dto/DeleteBookDto.java](/src/main/java/tr/com/obss/bookportal/dto/DeleteBookDto.java) | Java | 16 | 0 | 8 | 24 |
| [src/main/java/tr/com/obss/bookportal/dto/DeleteUserDto.java](/src/main/java/tr/com/obss/bookportal/dto/DeleteUserDto.java) | Java | 18 | 0 | 7 | 25 |
| [src/main/java/tr/com/obss/bookportal/dto/SignInResponseDto.java](/src/main/java/tr/com/obss/bookportal/dto/SignInResponseDto.java) | Java | 12 | 0 | 5 | 17 |
| [src/main/java/tr/com/obss/bookportal/dto/UpdateUserDto.java](/src/main/java/tr/com/obss/bookportal/dto/UpdateUserDto.java) | Java | 16 | 0 | 9 | 25 |
| [src/main/java/tr/com/obss/bookportal/dto/UserDto.java](/src/main/java/tr/com/obss/bookportal/dto/UserDto.java) | Java | 18 | 0 | 11 | 29 |
| [src/main/java/tr/com/obss/bookportal/dto/response/DataResponse.java](/src/main/java/tr/com/obss/bookportal/dto/response/DataResponse.java) | Java | 12 | 0 | 5 | 17 |
| [src/main/java/tr/com/obss/bookportal/dto/response/ErrorDataResponse.java](/src/main/java/tr/com/obss/bookportal/dto/response/ErrorDataResponse.java) | Java | 6 | 0 | 5 | 11 |
| [src/main/java/tr/com/obss/bookportal/dto/response/ErrorResponse.java](/src/main/java/tr/com/obss/bookportal/dto/response/ErrorResponse.java) | Java | 16 | 0 | 7 | 23 |
| [src/main/java/tr/com/obss/bookportal/dto/response/Response.java](/src/main/java/tr/com/obss/bookportal/dto/response/Response.java) | Java | 15 | 0 | 7 | 22 |
| [src/main/java/tr/com/obss/bookportal/dto/response/SuccessDataResponse.java](/src/main/java/tr/com/obss/bookportal/dto/response/SuccessDataResponse.java) | Java | 6 | 1 | 4 | 11 |
| [src/main/java/tr/com/obss/bookportal/dto/response/SuccessResponse.java](/src/main/java/tr/com/obss/bookportal/dto/response/SuccessResponse.java) | Java | 9 | 0 | 4 | 13 |
| [src/main/java/tr/com/obss/bookportal/exceptions/AuthorNotFoundExceptions.java](/src/main/java/tr/com/obss/bookportal/exceptions/AuthorNotFoundExceptions.java) | Java | 17 | 0 | 8 | 25 |
| [src/main/java/tr/com/obss/bookportal/exceptions/BookAlreadyAttachedException.java](/src/main/java/tr/com/obss/bookportal/exceptions/BookAlreadyAttachedException.java) | Java | 17 | 0 | 7 | 24 |
| [src/main/java/tr/com/obss/bookportal/exceptions/BookNotFoundException.java](/src/main/java/tr/com/obss/bookportal/exceptions/BookNotFoundException.java) | Java | 17 | 0 | 10 | 27 |
| [src/main/java/tr/com/obss/bookportal/exceptions/FavoriteListNotHaveBook.java](/src/main/java/tr/com/obss/bookportal/exceptions/FavoriteListNotHaveBook.java) | Java | 17 | 0 | 10 | 27 |
| [src/main/java/tr/com/obss/bookportal/exceptions/ReadingListNotHaveBook.java](/src/main/java/tr/com/obss/bookportal/exceptions/ReadingListNotHaveBook.java) | Java | 17 | 0 | 10 | 27 |
| [src/main/java/tr/com/obss/bookportal/exceptions/UserNamePasswordFalse.java](/src/main/java/tr/com/obss/bookportal/exceptions/UserNamePasswordFalse.java) | Java | 17 | 0 | 12 | 29 |
| [src/main/java/tr/com/obss/bookportal/exceptions/UserNameUsedException.java](/src/main/java/tr/com/obss/bookportal/exceptions/UserNameUsedException.java) | Java | 17 | 0 | 8 | 25 |
| [src/main/java/tr/com/obss/bookportal/exceptions/UserNotFoundExceptions.java](/src/main/java/tr/com/obss/bookportal/exceptions/UserNotFoundExceptions.java) | Java | 17 | 0 | 10 | 27 |
| [src/main/java/tr/com/obss/bookportal/exceptions/ValidationException.java](/src/main/java/tr/com/obss/bookportal/exceptions/ValidationException.java) | Java | 17 | 0 | 7 | 24 |
| [src/main/java/tr/com/obss/bookportal/filter/AllRequestFilter.java](/src/main/java/tr/com/obss/bookportal/filter/AllRequestFilter.java) | Java | 30 | 0 | 14 | 44 |
| [src/main/java/tr/com/obss/bookportal/mapper/AuthorMapper.java](/src/main/java/tr/com/obss/bookportal/mapper/AuthorMapper.java) | Java | 19 | 0 | 8 | 27 |
| [src/main/java/tr/com/obss/bookportal/mapper/BookMapper.java](/src/main/java/tr/com/obss/bookportal/mapper/BookMapper.java) | Java | 16 | 0 | 8 | 24 |
| [src/main/java/tr/com/obss/bookportal/mapper/UserMapper.java](/src/main/java/tr/com/obss/bookportal/mapper/UserMapper.java) | Java | 24 | 0 | 11 | 35 |
| [src/main/java/tr/com/obss/bookportal/model/Author.java](/src/main/java/tr/com/obss/bookportal/model/Author.java) | Java | 30 | 0 | 11 | 41 |
| [src/main/java/tr/com/obss/bookportal/model/Book.java](/src/main/java/tr/com/obss/bookportal/model/Book.java) | Java | 32 | 0 | 14 | 46 |
| [src/main/java/tr/com/obss/bookportal/model/Role.java](/src/main/java/tr/com/obss/bookportal/model/Role.java) | Java | 28 | 0 | 8 | 36 |
| [src/main/java/tr/com/obss/bookportal/model/RoleType.java](/src/main/java/tr/com/obss/bookportal/model/RoleType.java) | Java | 4 | 0 | 2 | 6 |
| [src/main/java/tr/com/obss/bookportal/model/User.java](/src/main/java/tr/com/obss/bookportal/model/User.java) | Java | 81 | 0 | 28 | 109 |
| [src/main/java/tr/com/obss/bookportal/repository/AuthorRepository.java](/src/main/java/tr/com/obss/bookportal/repository/AuthorRepository.java) | Java | 11 | 0 | 7 | 18 |
| [src/main/java/tr/com/obss/bookportal/repository/BookRepository.java](/src/main/java/tr/com/obss/bookportal/repository/BookRepository.java) | Java | 14 | 0 | 7 | 21 |
| [src/main/java/tr/com/obss/bookportal/repository/RoleRepository.java](/src/main/java/tr/com/obss/bookportal/repository/RoleRepository.java) | Java | 6 | 0 | 5 | 11 |
| [src/main/java/tr/com/obss/bookportal/repository/UserRepository.java](/src/main/java/tr/com/obss/bookportal/repository/UserRepository.java) | Java | 13 | 0 | 12 | 25 |
| [src/main/java/tr/com/obss/bookportal/security/BookPortalUserDetails.java](/src/main/java/tr/com/obss/bookportal/security/BookPortalUserDetails.java) | Java | 56 | 9 | 22 | 87 |
| [src/main/java/tr/com/obss/bookportal/security/SecurityConfig.java](/src/main/java/tr/com/obss/bookportal/security/SecurityConfig.java) | Java | 42 | 52 | 10 | 104 |
| [src/main/java/tr/com/obss/bookportal/service/AuthorService.java](/src/main/java/tr/com/obss/bookportal/service/AuthorService.java) | Java | 15 | 0 | 15 | 30 |
| [src/main/java/tr/com/obss/bookportal/service/BookService.java](/src/main/java/tr/com/obss/bookportal/service/BookService.java) | Java | 12 | 0 | 12 | 24 |
| [src/main/java/tr/com/obss/bookportal/service/RoleService.java](/src/main/java/tr/com/obss/bookportal/service/RoleService.java) | Java | 9 | 0 | 7 | 16 |
| [src/main/java/tr/com/obss/bookportal/service/UserService.java](/src/main/java/tr/com/obss/bookportal/service/UserService.java) | Java | 22 | 0 | 19 | 41 |
| [src/main/java/tr/com/obss/bookportal/service/imp/AuthorServiceImpl.java](/src/main/java/tr/com/obss/bookportal/service/imp/AuthorServiceImpl.java) | Java | 52 | 3 | 42 | 97 |
| [src/main/java/tr/com/obss/bookportal/service/imp/BookServiceImpl.java](/src/main/java/tr/com/obss/bookportal/service/imp/BookServiceImpl.java) | Java | 53 | 3 | 38 | 94 |
| [src/main/java/tr/com/obss/bookportal/service/imp/RoleServiceImpl.java](/src/main/java/tr/com/obss/bookportal/service/imp/RoleServiceImpl.java) | Java | 30 | 3 | 19 | 52 |
| [src/main/java/tr/com/obss/bookportal/service/imp/UserServiceImpl.java](/src/main/java/tr/com/obss/bookportal/service/imp/UserServiceImpl.java) | Java | 132 | 3 | 74 | 209 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)