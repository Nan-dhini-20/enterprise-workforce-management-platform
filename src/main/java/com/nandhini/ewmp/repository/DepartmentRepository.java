package com.nandhini.ewmp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nandhini.ewmp.entity.Department;

public interface DepartmentRepository
        extends JpaRepository<Department, Long> {

}