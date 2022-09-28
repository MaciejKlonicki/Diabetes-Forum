package com.maciejklonicki.org.backend.repository;

import com.maciejklonicki.org.backend.model.Users;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RequiredArgsConstructor
class UserRepositoryTest {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Test
    void injectedComponentAreNotNull() {
        assertThat(userRepository).isNotNull();
        assertThat(roleRepository).isNotNull();
    }

    @Test
    void itShouldCheckIfFindByEmailUsersExists() {
        //given
        String email = "maciek.klonicki@o2.pl";
        Users users = new Users(
                "Maciej",
                email,
                "123456789",
                "haslo"
        );
        userRepository.save(users);

        //when
        Users byEmail = userRepository.findByEmail(email);

        //then
        assertThat(byEmail).isEqualTo(users);
    }
}