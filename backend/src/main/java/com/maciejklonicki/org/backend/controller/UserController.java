package com.maciejklonicki.org.backend.controller;

import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    private List<Users> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getSingleUser(@PathVariable Integer id) {
        Optional<Users> users = Optional.ofNullable(userService.findSingleUser(id));
        return users.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    ResponseEntity<Users> addNewUser (@RequestBody Users users) throws URISyntaxException {
        Users result = userService.addNewUser(users);
        return ResponseEntity.created(new URI("/users" + result.getId()))
                .body(result);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    ResponseEntity<Users> updateUser (@RequestBody Users users, @PathVariable Integer id) {
        Users result = userService.updateUser(users,id);
        return ResponseEntity.ok().body(result);
    }

}
