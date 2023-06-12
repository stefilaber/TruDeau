package com.trudeau.backend.repository;

import java.util.List;

import com.trudeau.backend.entity.SimpleTodo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SimpleTodoRepository extends JpaRepository<SimpleTodo, Long> {

    List<SimpleTodo> findAllByOrderByDateAsc();
}
