package com.trudeau.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trudeau.backend.entity.SimpleTodo;
import com.trudeau.backend.repository.SimpleTodoRepository;

@Service
public class SimpleTodoService {
    
    private final SimpleTodoRepository simpleTodoRepository;

    public SimpleTodoService(SimpleTodoRepository simpleTodoRepository) {
        this.simpleTodoRepository = simpleTodoRepository;
    }

    public List<SimpleTodo> getTodos() {
        return simpleTodoRepository.findAll();
    }
}
