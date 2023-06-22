package com.trudeau.backend.controller.exception;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(BAD_REQUEST)
public class BadRequestException extends RuntimeException {
    // noop
}
