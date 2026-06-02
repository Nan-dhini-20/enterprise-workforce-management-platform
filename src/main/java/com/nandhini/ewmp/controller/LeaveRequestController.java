package com.nandhini.ewmp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nandhini.ewmp.entity.LeaveRequest;
import com.nandhini.ewmp.service.LeaveRequestService;

@RestController
@RequestMapping("/leave-requests")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestService leaveRequestService;

    @PostMapping
    public LeaveRequest createLeaveRequest(
            @RequestBody LeaveRequest leaveRequest) {

        return leaveRequestService
                .saveLeaveRequest(leaveRequest);
    }

    @GetMapping
    public List<LeaveRequest> getAllLeaveRequests() {

        return leaveRequestService
                .getAllLeaveRequests();
    }

    @GetMapping("/{id}")
    public LeaveRequest getLeaveRequestById(
            @PathVariable Long id) {

        return leaveRequestService
                .getLeaveRequestById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteLeaveRequest(
            @PathVariable Long id) {

        leaveRequestService.deleteLeaveRequest(id);
    }
    @PutMapping("/{id}/status")
    public LeaveRequest updateLeaveStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return leaveRequestService
                .updateLeaveStatus(id, status);
    }
}