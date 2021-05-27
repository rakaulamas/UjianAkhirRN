package com.ujianRN.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.ujianRN.entity.User;
import com.ujianRN.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
			@Autowired
			UserRepository userRepo;

		@GetMapping("/")
		public List<User> getAll() {
		return(List<User>) userRepo.findAll();
		}	
			
		@GetMapping("/login/")
		public User loginUser(@RequestParam("name")String name, @RequestParam("phone")String phone) {
			return userRepo.loginUser(name,phone);
		}
		
		
		@PostMapping("/register")
		//@RequestMapping(value="/add", method=RequestMethod.POST)
		public String addUser(@RequestBody User user) {
		userRepo.save(user);
		return "Berhasil Registrasi"; 	
		}
		
		
		
}
