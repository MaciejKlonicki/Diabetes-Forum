package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.web.dto.UserRegistrationDto;

public interface UserService {
     Users save(UserRegistrationDto registrationDto);
}
