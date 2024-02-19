package com.stockmanagement.fullstack.exeption;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("No se encontro la empresa con NIT: " + id);
    }
}
