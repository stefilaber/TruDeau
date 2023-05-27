package com.trudeau.backend.service;

import java.util.List;

import com.trudeau.backend.entity.SimpleTodo;
import com.trudeau.backend.repository.SimpleTodoRepository;
import org.springframework.stereotype.Service;

@Service
public class SimpleTodoService {

    private final SimpleTodoRepository simpleTodoRepository;

    public SimpleTodoService(SimpleTodoRepository simpleTodoRepository) {
        this.simpleTodoRepository = simpleTodoRepository;
    }

    /**
     * Finds all {@link SimpleTodo simple todos} ordered by their date.
     * @return a list of {@link SimpleTodo simple todos}
     */
    public List<SimpleTodo> getTodos() {
        return simpleTodoRepository.findAllByOrderByDateAsc();
    }
}
