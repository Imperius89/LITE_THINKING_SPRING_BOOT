package com.stockmanagement.fullstack.repository;

import com.stockmanagement.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
