package com.maciejklonicki.org.backend.controller;

import com.maciejklonicki.org.backend.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @Mock private UserService userService;
    @InjectMocks private UserController userController;

    @BeforeEach
    public void setUp() {
        userController = new UserController(userService);
    }

    @Test
    void findAllUsers() {
        //when
        userController.findAllUsers();
        //then
        verify(userService).findAllUsers();
    }

    @Test
    void getSingleUser() {
        //when
        userController.getSingleUser(15L);
        //then
        userService.findSingleUser(15L);
    }
    @Test
    void deleteUser() {
        //when
        userController.deleteUser(5L);
        //then
        verify(userService).deleteUser(5L);
    }
}