package com.trudeau.backend.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.trudeau.backend.entity.SimpleTodo;
import com.trudeau.backend.repository.SimpleTodoRepository;
import com.trudeau.backend.service.exception.EmptyOptionalException;

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

    /**
     * Toggles the done status of a {@link SimpleTodo simple todo}.
     * @param id the id of the {@link SimpleTodo simple todo}
     * @return the new done status
     * @throws EmptyOptionalException if the {@link SimpleTodo simple todo} with the given id does not exist
     */
    public boolean toggleTodoDoneStatus(Long id) throws EmptyOptionalException {
        var todo = simpleTodoRepository.findById(id).orElseThrow(EmptyOptionalException::new);
        todo.setDone(!todo.isDone());
        simpleTodoRepository.save(todo);
        return todo.isDone();
    }
}
