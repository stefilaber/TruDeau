package com.trudeau.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import static lombok.AccessLevel.NONE;

@Entity(name = "todo_category")
@Getter
@Setter
public class TodoCategory {
    
    @Id
    @GeneratedValue
    @Column(name = "id")
    @Setter(NONE)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "color", nullable = false)
    private String color;
}
