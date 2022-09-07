package com.maciejklonicki.org.backend.config;

import com.maciejklonicki.org.backend.model.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.Serial;
import java.io.Serializable;
import java.util.Base64;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider implements Serializable {

    private final UserDetailsService userDetailsService;

    @Serial
    private static final long serialVersionUID = 3538567818657403754L;
    @Value("${jwt.secret-key}")
    private String secretKey;

    @PostConstruct
    protected void init () {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken (String username, Role role) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("auth", role);

        Date now = new Date();
        long validityInMilliseconds = 50 * 60 * 60;
        return Jwts.builder().setClaims(claims).setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + validityInMilliseconds))
                .signWith(SignatureAlgorithm.HS256, secretKey).compact();
    }

    public Authentication getAuthentication (String username) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public Claims getClaimsFromToken (String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }
}
