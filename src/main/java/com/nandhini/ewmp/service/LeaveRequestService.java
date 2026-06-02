package com.nandhini.ewmp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nandhini.ewmp.entity.LeaveRequest;
import com.nandhini.ewmp.exception.ResourceNotFoundException;
import com.nandhini.ewmp.repository.LeaveRequestRepository;

@Service
public class LeaveRequestService {

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    public LeaveRequest saveLeaveRequest(
            LeaveRequest leaveRequest) {

        return leaveRequestRepository.save(leaveRequest);
    }

    public List<LeaveRequest> getAllLeaveRequests() {
        return leaveRequestRepository.findAll();
    }

    public LeaveRequest getLeaveRequestById(Long id) {

        return leaveRequestRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave request not found with id " + id));
    }

    public void deleteLeaveRequest(Long id) {
        leaveRequestRepository.deleteById(id);
    }
    public LeaveRequest updateLeaveStatus(
        Long id,
        String status) {

    LeaveRequest leave =
            leaveRequestRepository
                    .findById(id)
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Leave Request Not Found"));

    leave.setStatus(status);

    return leaveRequestRepository.save(leave);
}
}