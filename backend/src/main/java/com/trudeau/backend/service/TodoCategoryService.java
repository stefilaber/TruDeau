package com.trudeau.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trudeau.backend.entity.TodoCategory;
import com.trudeau.backend.repository.TodoCategoryRepository;

@Service
public class TodoCategoryService {
    
    private final TodoCategoryRepository todoCategoryRepository;

    public TodoCategoryService(TodoCategoryRepository todoCategoryRepository) {
        this.todoCategoryRepository = todoCategoryRepository;
    }

    public List<TodoCategory> getTodoCategories() {
        return todoCategoryRepository.findAll();
    }

    public TodoCategory addTodoCategory(TodoCategory todoCategory) {
        return todoCategoryRepository.save(todoCategory);
    }
}
