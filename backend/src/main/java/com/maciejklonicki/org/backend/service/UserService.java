package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<Users> findAllUsers () {
        return userRepository.findAll();
    }

    public Optional<Users> findSingleUser (Long id) {
        return userRepository.findById(id);
    }

    public Users addNewUser (Users users) {
        userRepository.saveAndFlush(users);
        return users;
    }

    public void deleteUser (Long id) {
        userRepository.deleteById(id);
    }

    public Users updateUser (Users usersDetails, Long userID) {
        userRepository.findById(userID);
        usersDetails.setId(userID);
        return userRepository.save(usersDetails);
    }
}
