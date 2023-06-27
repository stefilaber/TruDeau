package com.trudeau.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trudeau.backend.controller.exception.BadRequestException;
import com.trudeau.backend.controller.exception.NotFoundException;
import com.trudeau.backend.entity.SimpleTodo;
import com.trudeau.backend.service.SimpleTodoService;
import com.trudeau.backend.service.exception.EmptyOptionalException;

@RestController
@RequestMapping("/simpleTodos")
public class SimpleTodoController {

    private final SimpleTodoService simpleTodoService;

    // /////////////////////////////////////////////////////////////////////////
    // Init
    // /////////////////////////////////////////////////////////////////////////

    public SimpleTodoController(SimpleTodoService simpleTodoService) {
        this.simpleTodoService = simpleTodoService;
    }

    // /////////////////////////////////////////////////////////////////////////
    // Methods
    // /////////////////////////////////////////////////////////////////////////

    @GetMapping
    public List<SimpleTodo> getTodos() {
        return simpleTodoService.getTodos();
    }

    @GetMapping("/{date}")
    public List<SimpleTodo> getTodosByDate(@PathVariable String date) {
        try {
            return simpleTodoService.getTodosByDate(date);
        } catch (IllegalArgumentException e) {
            throw new BadRequestException();
        }
    }

    @PostMapping
    public SimpleTodo addTodo(@RequestBody SimpleTodo simpleTodo) {
        return simpleTodoService.addTodo(simpleTodo);
    }

    @PutMapping("/{id}/toggle")
    public boolean toggleTodoDoneStatus(@PathVariable Long id) {
        try {
            return simpleTodoService.toggleTodoDoneStatus(id);
        } catch (EmptyOptionalException e) {
            throw new NotFoundException();
        }
    }
}
