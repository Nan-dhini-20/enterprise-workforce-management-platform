package com.nandhini.ewmp.mapper;

import org.springframework.stereotype.Component;

import com.nandhini.ewmp.dto.EmployeeRequestDTO;
import com.nandhini.ewmp.dto.EmployeeResponseDTO;
import com.nandhini.ewmp.entity.Department;
import com.nandhini.ewmp.entity.Employee;

@Component
public class EmployeeMapper {

    public Employee toEntity(EmployeeRequestDTO dto,
                             Department department) {

        Employee employee = new Employee();

        employee.setName(dto.getName());
        employee.setEmail(dto.getEmail());
        employee.setPassword(dto.getPassword());
        employee.setPhoneNumber(dto.getPhoneNumber());
        employee.setDesignation(dto.getDesignation());
        employee.setSalary(dto.getSalary());
        employee.setRole(dto.getRole());
        employee.setDepartment(department);

        return employee;
    }

    public EmployeeResponseDTO toResponseDTO(
            Employee employee) {

        EmployeeResponseDTO dto =
                new EmployeeResponseDTO();

        dto.setEmployeeId(employee.getEmployeeId());
        dto.setName(employee.getName());
        dto.setEmail(employee.getEmail());
        dto.setPhoneNumber(employee.getPhoneNumber());
        dto.setDesignation(employee.getDesignation());
        dto.setSalary(employee.getSalary());
        dto.setRole(employee.getRole());

        if (employee.getDepartment() != null) {

            dto.setDepartmentId(
                    employee.getDepartment()
                            .getDepartmentId());

            dto.setDepartmentName(
                    employee.getDepartment()
                            .getDepartmentName());
        }

        return dto;
    }
}