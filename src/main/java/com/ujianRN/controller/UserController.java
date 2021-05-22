package com.ujianRN.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
			
		@PostMapping("/add")
		//@RequestMapping(value="/add", method=RequestMethod.POST)
		public String addUser(@RequestBody User user) {
		this.userRepo.save(user);
		return "Berhasil Registrasi"; 	
		}
		
		
}
