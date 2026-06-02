package com.nandhini.ewmp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nandhini.ewmp.entity.Employee;


public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmail(String email);
    List<Employee> findByNameContainingIgnoreCase(
        String name);
}
