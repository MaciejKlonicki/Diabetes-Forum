package com.maciejklonicki.org.backend.controller;

import com.maciejklonicki.org.backend.config.JwtTokenProvider;
import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.RoleRepository;
import com.maciejklonicki.org.backend.repository.UserRepository;
import com.maciejklonicki.org.backend.utils.ConstantUtils;
import lombok.RequiredArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserResourceImpl {

    private static final Logger log = LoggerFactory.getLogger(UserResourceImpl.class);

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider tokenProvider;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody Users users) {
        log.info("UserResourceImpl : register");
        JSONObject jsonObject = new JSONObject();
        try {
            users.setPassword(new BCryptPasswordEncoder().encode(users.getPassword()));
            users.setRole(roleRepository.findByName(ConstantUtils.USER.toString()));
            Users savedUsers = userRepository.saveAndFlush(users);
            jsonObject.put("message", savedUsers.getName() + " saved succesfully");
            return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
        } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            } catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping(value = "/authenticate", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> authenticate (@RequestBody Users users) {
        log.info("UserResourceImpl : authenticate");
        JSONObject jsonObject = new JSONObject();

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(users.getEmail(), users.getPassword()));
            if (authentication.isAuthenticated()) {
                String email = users.getEmail();
                jsonObject.put("name", authentication.getName());
                jsonObject.put("authorities", authentication.getAuthorities());
                jsonObject.put("token", tokenProvider.createToken(users.getEmail(), userRepository.findByEmail(users.getEmail()).getRole()));
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
        } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            } catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
        return null;
    }
}
