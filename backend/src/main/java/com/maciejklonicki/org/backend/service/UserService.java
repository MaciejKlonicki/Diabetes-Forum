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

    //getting all users
    public List<Users> findAllUsers () {
        return userRepository.findAll();
    }

    //getting single user
    public Optional<Users> findSingleUser (Long id) {
        return userRepository.findById(id);
    }

    //adding new user
    public Users addNewUser (Users users) {
        userRepository.saveAndFlush(users);
        return users;
    }

    //delete user
    public void deleteUser (Long id) {
        userRepository.deleteById(id);
    }

    //update user
    public Users updateUser (Users usersDetails, Long userID) {
        Users users = userRepository.findById(userID).get();
        users.setName(usersDetails.getName());
        users.setEmail(usersDetails.getEmail());
        users.setPassword(usersDetails.getPassword());
        users.setMobile(usersDetails.getMobile());

        return userRepository.save(users);
    }


}
