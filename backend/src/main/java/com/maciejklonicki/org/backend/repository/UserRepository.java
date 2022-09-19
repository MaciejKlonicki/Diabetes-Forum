package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository <Users, Long> {
    @Query("FROM Users WHERE email=:email")
    Users findByEmail (@Param("email") String email);
}
