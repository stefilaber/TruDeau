package com.trudeau.backend.repository;

import com.trudeau.backend.entity.TodoCategory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoCategoryRepository extends JpaRepository<TodoCategory, Long> {
    // noop
}
