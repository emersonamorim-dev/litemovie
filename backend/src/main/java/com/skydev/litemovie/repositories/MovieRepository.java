package com.skydev.litemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skydev.litemovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
