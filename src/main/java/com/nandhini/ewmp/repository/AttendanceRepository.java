package com.nandhini.ewmp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nandhini.ewmp.entity.Attendance;

@Repository
public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {

}