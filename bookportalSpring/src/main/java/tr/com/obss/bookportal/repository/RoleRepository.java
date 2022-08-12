package tr.com.obss.bookportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tr.com.obss.bookportal.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

	Role findByRole(String roleName);
}
