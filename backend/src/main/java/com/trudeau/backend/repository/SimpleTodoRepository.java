package com.trudeau.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trudeau.backend.entity.SimpleTodo;

@Repository
public interface SimpleTodoRepository extends JpaRepository<SimpleTodo, Long> {
    
}
