package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.web.dto.UserRegistrationDto;
import org.apache.catalina.User;

public interface UserService {
    User save(UserRegistrationDto registrationDto);
}
