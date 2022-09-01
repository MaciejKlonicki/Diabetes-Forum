package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<Role> findAllRoles () {
        return roleRepository.findAll();
    }

    //getting single user
    public Role findSingleRole (Integer id) {
        return roleRepository.findById(id).orElseThrow();
    }

    //adding new user
    public Role addNewRole (Role role) {
        roleRepository.save(role);
        return role;
    }

    //delete user
    public void deleteRole (Integer id) {
        roleRepository.deleteById(id);
    }

    //update user
    public Role updateRole (Role roleDetails, Integer roleID) {
        Role role = roleRepository.findById(roleID).get();
        role.setName(roleDetails.getName());
        role.setUsers(roleDetails.getUsers());

        return roleRepository.save(role);
    }
}
