package com.trudeau.backend.controller;

import java.util.List;

import com.trudeau.backend.entity.SimpleTodo;
import com.trudeau.backend.service.SimpleTodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/simpleTodos")
public class SimpleTodoController {

    private final SimpleTodoService simpleTodoService;

    public SimpleTodoController(SimpleTodoService simpleTodoService) {
        this.simpleTodoService = simpleTodoService;
    }

    @GetMapping
    public List<SimpleTodo> getTodos() {
        return simpleTodoService.getTodos();
    }
}
