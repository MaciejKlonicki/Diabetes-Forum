package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository <Role, Long> {

}
