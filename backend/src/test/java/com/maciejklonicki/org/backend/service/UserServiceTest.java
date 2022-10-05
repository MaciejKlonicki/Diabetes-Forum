package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

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
    @Disabled
    void findSingleUser() {

    }

    @Test
    @Disabled
    void addNewUser() {

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