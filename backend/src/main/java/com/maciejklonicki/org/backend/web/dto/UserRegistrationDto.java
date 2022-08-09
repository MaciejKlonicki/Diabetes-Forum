package com.maciejklonicki.org.backend.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationDto {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
