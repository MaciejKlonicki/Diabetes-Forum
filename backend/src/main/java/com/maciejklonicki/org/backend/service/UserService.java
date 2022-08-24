package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    //getting all users
    public List<Users> findAllUsers () {
        return userRepository.findAll();
    }

    //getting single user
    public Users findSingleUser (Integer id) {
        return userRepository.findById(id).orElseThrow();
    }

    //adding new user
    public Users addNewUser (Users users) {
        userRepository.save(users);
        return users;
    }

    //delete user
    public void deleteUser (Integer id) {
        userRepository.deleteById(id);
    }

    //update user
    public Users updateUser (Users usersDetails, Integer userID) {
        Users users = userRepository.findById(userID).get();
        users.setFirstName(usersDetails.getFirstName());
        users.setSecondName(usersDetails.getSecondName());
        users.setEmail(usersDetails.getEmail());
        users.setPassword(usersDetails.getPassword());
        users.setPhoneNumber(usersDetails.getPhoneNumber());

        return userRepository.save(users);
    }


}
