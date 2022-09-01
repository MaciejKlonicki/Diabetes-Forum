package com.maciejklonicki.org.backend;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.model.Users;
import com.maciejklonicki.org.backend.service.RoleService;
import com.maciejklonicki.org.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private RoleService roleService;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Role role = new Role();
		role.setName("admin");
		roleService.addNewRole(role);

		Users users = new Users();
		users.setFirstName("Maciej");
		users.setSecondName("Klonicki");
		users.setEmail("test@test.com");
		users.setPassword("test");
		users.setPhoneNumber("123456789");
		users.setRole(roleService.findSingleRole(1));
		userService.addNewUser(users);
	}
}
