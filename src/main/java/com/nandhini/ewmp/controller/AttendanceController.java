package com.nandhini.ewmp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nandhini.ewmp.entity.Attendance;
import com.nandhini.ewmp.service.AttendanceService;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping
    public Attendance saveAttendance(
            @RequestBody Attendance attendance) {

        return attendanceService
                .saveAttendance(attendance);
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {

        return attendanceService
                .getAllAttendance();
    }

    @GetMapping("/{id}")
    public Attendance getAttendanceById(
            @PathVariable Long id) {

        return attendanceService
                .getAttendanceById(id);
    }
}