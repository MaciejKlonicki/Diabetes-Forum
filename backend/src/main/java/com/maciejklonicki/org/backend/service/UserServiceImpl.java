package com.maciejklonicki.org.backend.service;


import com.maciejklonicki.org.backend.repository.UserRepository;
import com.maciejklonicki.org.backend.web.dto.UserRegistrationDto;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User save(UserRegistrationDto registrationDto) {
        return null;
    }
}
