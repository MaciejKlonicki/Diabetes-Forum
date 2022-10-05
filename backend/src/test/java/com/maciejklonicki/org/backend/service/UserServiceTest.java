package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import com.maciejklonicki.org.backend.utils.ConstantUtils;
import org.h2.engine.Role;
import org.h2.engine.User;
import org.h2.schema.Constant;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    private UserService underTest;
    @Mock private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        underTest = new UserService(userRepository);
    }

    @Test
    void canFindAllUsers() {
        //when
        underTest.findAllUsers();
        //then
        verify(userRepository).findAll();
    }

    @Test
    void canFindSingleUser() {
        //when
        underTest.findSingleUser(163L);
        //then
        verify(userRepository).findById(163L);
    }

    @Test
    void canAddNewUser() {
        //given
        Users users = new Users(
                1L,
                "Maciek",
                "maciek.klonicki@gmail.com",
                "609978876",
                "kloneq123"
        );
        //when
        underTest.addNewUser(users);
        //then
        ArgumentCaptor<Users> usersArgumentCaptor = ArgumentCaptor.forClass(Users.class);
        verify(userRepository).saveAndFlush(usersArgumentCaptor.capture());
        Users capturedUsers = usersArgumentCaptor.getValue();
        assertThat(capturedUsers).isEqualTo(users);
    }

    @Test
    @Disabled
    void deleteUser() {

    }

    @Test
    @Disabled
    void updateUser() {

    }
}