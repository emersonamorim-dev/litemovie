package com.skydev.litemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skydev.litemovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
