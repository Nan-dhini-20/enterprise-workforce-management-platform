package com.nandhini.ewmp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nandhini.ewmp.dto.EmployeeRequestDTO;
import com.nandhini.ewmp.dto.EmployeeResponseDTO;
import com.nandhini.ewmp.entity.Department;
import com.nandhini.ewmp.entity.Employee;
import com.nandhini.ewmp.exception.ResourceNotFoundException;
import com.nandhini.ewmp.mapper.EmployeeMapper;
import com.nandhini.ewmp.repository.DepartmentRepository;
import com.nandhini.ewmp.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private EmployeeMapper employeeMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public EmployeeResponseDTO saveEmployee(
            EmployeeRequestDTO dto) {

        Department department =
                departmentRepository.findById(
                        dto.getDepartmentId())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Department not found with id "
                                                + dto.getDepartmentId()));

        Employee employee =
                employeeMapper.toEntity(dto, department);

        employee.setPassword(
                passwordEncoder.encode(
                        employee.getPassword()));

        Employee savedEmployee =
                employeeRepository.save(employee);

        return employeeMapper.toResponseDTO(
                savedEmployee);
    }

    public List<EmployeeResponseDTO> getAllEmployees() {

        return employeeRepository.findAll()
                .stream()
                .map(employeeMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public EmployeeResponseDTO getEmployeeById(
            Long id) {

        Employee employee =
                employeeRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Employee not found with id "
                                                + id));

        return employeeMapper.toResponseDTO(
                employee);
    }

    public EmployeeResponseDTO updateEmployee(
            Long id,
            EmployeeRequestDTO dto) {

        Employee employee =
                employeeRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Employee not found with id "
                                                + id));

        Department department =
                departmentRepository.findById(
                        dto.getDepartmentId())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Department not found with id "
                                                + dto.getDepartmentId()));

        employee.setName(dto.getName());
        employee.setEmail(dto.getEmail());
        employee.setPhoneNumber(dto.getPhoneNumber());
        employee.setDesignation(dto.getDesignation());
        employee.setSalary(dto.getSalary());
        employee.setRole(dto.getRole());
        employee.setDepartment(department);

        if (dto.getPassword() != null &&
                !dto.getPassword().isBlank()) {

            employee.setPassword(
                    passwordEncoder.encode(
                            dto.getPassword()));
        }

        Employee updatedEmployee =
                employeeRepository.save(employee);

        return employeeMapper.toResponseDTO(
                updatedEmployee);
    }

    public void deleteEmployee(Long id) {

        Employee employee =
                employeeRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Employee not found with id "
                                                + id));

        employeeRepository.delete(employee);
    }
    public List<EmployeeResponseDTO> searchEmployees(
        String name) {

    return employeeRepository
            .findByNameContainingIgnoreCase(name)
            .stream()
            .map(employeeMapper::toResponseDTO)
            .toList();
}
}