package com.maciejklonicki.org.backend;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.service.RoleService;
import com.maciejklonicki.org.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@RequiredArgsConstructor
public class BackendApplication implements CommandLineRunner {

	private final UserService userService;

	private final RoleService roleService;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Role role = new Role();
		role.setName("admin");
		roleService.saveOrUpdate(role);

		Users users = new Users();
		users.setEmail("test@test.com");
		users.setName("Test User");
		users.setMobile("123456789");
		users.setRole(roleService.findById(52L).get());
		users.setPassword(new BCryptPasswordEncoder().encode("test"));
		userService.addNewUser(users);
	}
}
