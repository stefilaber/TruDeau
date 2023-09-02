package com.trudeau.backend.entity;
import static lombok.AccessLevel.NONE;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

/**
 * {@link Entity} for a simple, non recurring todo.
 */
@Entity(name = "simple_todo")
@Getter
@Setter
public class SimpleTodo {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @Setter(NONE)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "done")
    private boolean done;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private TodoCategory category;
}
