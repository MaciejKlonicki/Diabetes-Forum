package com.maciejklonicki.org.backend.service;


import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users users = userRepository.findByEmail(email);
        if (users == null || !users.getEmail().isEmpty()) {
            throw new UsernameNotFoundException("Email " + email + " not found");
        }
        return new org.springframework.security.core.userdetails.User(users.getEmail(), users.getPassword(), getGrantedAuthority(users));

    }

    private Collection<GrantedAuthority> getGrantedAuthority(Users users) {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
         if (users.getRole().getName().equalsIgnoreCase("admin")) {
             authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
         }
         authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
         return authorities;
    }
}
