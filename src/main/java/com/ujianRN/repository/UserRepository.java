package com.ujianRN.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ujianRN.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
		
	
}
