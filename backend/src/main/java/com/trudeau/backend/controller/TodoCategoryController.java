package com.trudeau.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trudeau.backend.entity.TodoCategory;
import com.trudeau.backend.service.TodoCategoryService;

@RestController
@RequestMapping("/todoCategories")
public class TodoCategoryController {
    private final TodoCategoryService todoCategoryService;

    public TodoCategoryController(TodoCategoryService todoCategoryService) {
        this.todoCategoryService = todoCategoryService;
    }

    @GetMapping
    public List<TodoCategory> getTodos() {
        return todoCategoryService.getTodoCategories();
    }

    @PostMapping
    public TodoCategory addTodoCategory(@RequestBody TodoCategory todoCategory) {
        return todoCategoryService.addTodoCategory(todoCategory);
    }
}
