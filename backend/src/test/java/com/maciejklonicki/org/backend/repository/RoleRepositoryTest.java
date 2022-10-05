package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Role;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class RoleRepositoryTest {

    @Autowired
    RoleRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void findIfTheRoleWithTheNameExists() {
        //given
        String name = "USER";
        Role role = new Role(
                name
        );
        underTest.saveAndFlush(role);
        //when
        Role byName = underTest.findByName(name);
        //then
        assertThat(byName).isNotNull();
    }

    @Test
    void findIfTheRoleWithTheNameDoesNotExists() {
        //given
        String name = "USER";
        //when
        Role byName = underTest.findByName(name);
        //then
        assertThat(byName).isNull();
    }
}