package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<Role> findAllRoles () {
        return roleRepository.findAll();
    }

    //getting single user
    public Optional<Role> findById (Long id) {
        return roleRepository.findById(id);
    }

    //adding new user
    public Role saveOrUpdate (Role role) {
        return roleRepository.saveAndFlush(role);
    }

    //delete user
    public void deleteRole (Long id) {
        roleRepository.deleteById(id);
    }

    //update user
    public Role updateRole (Role roleDetails, Long roleID) {
        Role role = roleRepository.findById(roleID).get();
        role.setName(roleDetails.getName());
        role.setUsers(roleDetails.getUsers());

        return roleRepository.save(role);
    }
}
