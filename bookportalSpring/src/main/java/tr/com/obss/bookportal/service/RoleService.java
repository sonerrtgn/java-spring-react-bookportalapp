package tr.com.obss.bookportal.service;

import java.util.List;

import tr.com.obss.bookportal.model.Role;

public interface RoleService {

	Role getRoleByRoleType(String roleName);
	
	Role findById(Long id);
	
	void add(Role role);
	List<Role> getAll();
}
