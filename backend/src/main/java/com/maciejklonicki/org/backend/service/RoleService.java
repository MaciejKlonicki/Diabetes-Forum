package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public Collection<Role> findAll() {
        return roleRepository.findAll();
    }

    Optional<Role> findById (Long id) {
        return roleRepository.findById(id);
    }

    public Role findByName(String name) {
        return roleRepository.findByName(name);
    }

    public Role saveOrUpdate(Role role) {
        return roleRepository.saveAndFlush(role);
    }

    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            roleRepository.deleteById(id);
            jsonObject.put("message", "Role deleted!");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }
}
