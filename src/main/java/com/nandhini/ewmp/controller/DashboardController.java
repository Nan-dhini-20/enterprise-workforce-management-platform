package com.nandhini.ewmp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nandhini.ewmp.dto.DashboardStatsDTO;
import com.nandhini.ewmp.repository.AttendanceRepository;
import com.nandhini.ewmp.repository.DepartmentRepository;
import com.nandhini.ewmp.repository.EmployeeRepository;
import com.nandhini.ewmp.repository.LeaveRequestRepository;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @GetMapping("/stats")
    public DashboardStatsDTO getStats() {

        return new DashboardStatsDTO(
                employeeRepository.count(),
                departmentRepository.count(),
                leaveRequestRepository.count(),
                attendanceRepository.count()
        );
    }
}