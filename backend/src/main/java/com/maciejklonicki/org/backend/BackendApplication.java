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
		roleService.saveOrUpdate(new Role(66L, "admin"));
		roleService.saveOrUpdate(new Role(65L, "user"));

//		Users users1 = new Users();
//		users1.setEmail("test@user.com");
//		users1.setName("Test User");
//		users1.setMobile("123456789");
//		users1.setRole(roleService.findById(65L).get());
//		users1.setPassword(new BCryptPasswordEncoder().encode("testuser"));
//		userService.addNewUser(users1);
//
//		Users users2 = new Users();
//		users2.setEmail("test@admin.com");
//		users2.setName("Test Admin");
//		users2.setMobile("123456789");
//		users2.setRole(roleService.findById(66L).get());
//		users2.setPassword(new BCryptPasswordEncoder().encode("testadmin"));
//		userService.addNewUser(users2);
	}
}
