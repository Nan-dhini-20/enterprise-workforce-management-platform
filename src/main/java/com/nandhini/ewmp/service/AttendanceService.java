package com.nandhini.ewmp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nandhini.ewmp.entity.Attendance;
import com.nandhini.ewmp.exception.ResourceNotFoundException;
import com.nandhini.ewmp.repository.AttendanceRepository;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance saveAttendance(
            Attendance attendance) {

        return attendanceRepository.save(attendance);
    }

    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    public Attendance getAttendanceById(Long id) {
        return attendanceRepository.findById(id)
                .orElseThrow(() ->
                    new ResourceNotFoundException(
                        "Attendance not found with id " + id));
    }
    public Attendance updateAttendance(
        Long id,
        Attendance attendanceDetails) {

        Attendance attendance =
                attendanceRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Attendance not found"));

        attendance.setAttendanceDate(
                attendanceDetails.getAttendanceDate());

        attendance.setStatus(
                attendanceDetails.getStatus());

        Attendance updatedAttendance =
                attendanceRepository.save(attendance);

        return updatedAttendance;
    }
    public void deleteAttendance(Long id) {

        Attendance attendance =
                attendanceRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Attendance not found"));

        attendanceRepository.delete(attendance);
    }
}