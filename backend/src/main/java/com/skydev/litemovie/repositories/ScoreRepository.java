package com.skydev.litemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skydev.litemovie.entities.Score;
import com.skydev.litemovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
