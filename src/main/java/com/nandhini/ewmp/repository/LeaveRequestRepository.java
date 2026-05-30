package com.nandhini.ewmp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nandhini.ewmp.entity.LeaveRequest;

@Repository
public interface LeaveRequestRepository
        extends JpaRepository<LeaveRequest, Long> {

}