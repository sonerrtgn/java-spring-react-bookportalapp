package tr.com.obss.bookportal.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tr.com.obss.bookportal.model.Role;
import tr.com.obss.bookportal.repository.RoleRepository;
import tr.com.obss.bookportal.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Role getRoleByRoleType(String roleName) {
		// TODO Auto-generated method stub
		return this.roleRepository.findByRole(roleName);
	}

	@Override
	public Role findById(Long id) {
		// TODO Auto-generated method stub
		Optional<Role>  role = 		 this.roleRepository.findById(id);
		
		return role.get(); 
	}

	@Override
	public void add(Role role) {
		
		this.roleRepository.save(role);
		
	}

	@Override
	public List<Role> getAll() {
		// TODO Auto-generated method stub
		return this.roleRepository.findAll();
	}
	
	
	
	
	
	
}
