package com.trudeau.backend.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
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

    /**
     * Finds all {@link SimpleTodo simple todos} ordered by their date.
     * @return a list of {@link SimpleTodo simple todos}
     */
    public List<SimpleTodo> getTodos() {
        return simpleTodoRepository.findAllByOrderByDateAsc();
    }

    /**
     * Finds all {@link SimpleTodo simple todos} for a date ordered by their name.
     * @param date the date in the format {@code yyyy-MM-dd} (ISO)
     * @return a list of {@link SimpleTodo simple todos}
     * @throws IllegalArgumentException if the date is not in the correct format
     */
    public List<SimpleTodo> getTodosByDate(String date) {
        try {
            var parsedDate = LocalDate.parse(date, DateTimeFormatter.ISO_LOCAL_DATE);
            return simpleTodoRepository.findByDateOrderByNameAsc(parsedDate);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException();
        }
    }

    public SimpleTodo addTodo(SimpleTodo simpleTodo) {
        return simpleTodoRepository.save(simpleTodo);
    }
}
