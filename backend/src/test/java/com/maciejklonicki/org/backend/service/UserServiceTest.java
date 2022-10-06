package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {


    @Mock private UserRepository userRepository;
    @InjectMocks private UserService underTest;

    @BeforeEach
    public void setUp() {
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
    void canDeleteUser() {
        //when
        underTest.deleteUser(5L);
        //then
        verify(userRepository).deleteById(5L);
    }

    @Test
    void canUpdateUser() {
        //given
        Users users = new Users();
        users.setId(10L);
        users.setName("Test");
        Users newUser = new Users();
        users.setName("New Test");
        //when
        given(userRepository.findById(users.getId())).willReturn(Optional.of(users));
        underTest.updateUser(newUser, users.getId());
        //then
        verify(userRepository).save(newUser);
        verify(userRepository).findById(users.getId());
    }
}