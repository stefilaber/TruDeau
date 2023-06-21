package com.trudeau.backend.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trudeau.backend.entity.SimpleTodo;

public interface SimpleTodoRepository extends JpaRepository<SimpleTodo, Long> {

    List<SimpleTodo> findAllByOrderByDateAsc();
    List<SimpleTodo> findByDateOrderByNameAsc(LocalDate parsedDate);
}
