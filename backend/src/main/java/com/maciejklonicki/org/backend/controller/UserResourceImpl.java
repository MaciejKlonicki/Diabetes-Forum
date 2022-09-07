package com.maciejklonicki.org.backend.controller;

import com.maciejklonicki.org.backend.config.JwtTokenProvider;
import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserResourceImpl {

    private static final Logger log = LoggerFactory.getLogger(UserResourceImpl.class);

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider tokenProvider;

    private final UserRepository userRepository;

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
