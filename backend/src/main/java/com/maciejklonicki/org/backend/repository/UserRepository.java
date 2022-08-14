package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <Users, Integer> {
}
