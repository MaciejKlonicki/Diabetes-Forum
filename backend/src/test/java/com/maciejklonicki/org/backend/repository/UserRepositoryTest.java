package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Users;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void findIfTheUserWithThisEmailExists() {
        //given
        String email = "asdasd@wp.pl";
        Users users = new Users(
                "Maciej",
                email,
                "612315631",
                "mmaa44ccii33kkll222"
        );
        underTest.saveAndFlush(users);

        //when
        Users byEmail = underTest.findByEmail(email);

        //then
        assertThat(byEmail).isNotNull();
    }

    @Test
    void findIfTheUserWithThisEmailDoesNotExists() {
        //given
        String email = "maciekasd.kloniasdcki@gmail.com";
        //when
        Users byEmail = underTest.findByEmail(email);
        //then
        assertThat(byEmail).isNull();
    }
}