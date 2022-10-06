package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class UserDetailServiceImplTest {

    @Mock private UserRepository userRepository;
    @InjectMocks private UserDetailServiceImpl userDetailsService;

    @BeforeEach
    public void setUp() {
        userDetailsService = new UserDetailServiceImpl(userRepository);
    }

    @Test
    void checkIfUserRepoIsNotNull() {
        assertThat(userRepository).isNotNull();
    }

    @Test
    void checkIfUserDoesNotExistsWithThisEmail() {
        //given
        //when
        //then
    }
}