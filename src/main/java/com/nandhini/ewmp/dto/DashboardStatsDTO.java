package com.nandhini.ewmp.dto;

public class DashboardStatsDTO {

    private long employees;
    private long departments;
    private long leaves;
    private long attendance;

    public DashboardStatsDTO() {
    }

    public DashboardStatsDTO(
            long employees,
            long departments,
            long leaves,
            long attendance) {

        this.employees = employees;
        this.departments = departments;
        this.leaves = leaves;
        this.attendance = attendance;
    }

    public long getEmployees() {
        return employees;
    }

    public void setEmployees(long employees) {
        this.employees = employees;
    }

    public long getDepartments() {
        return departments;
    }

    public void setDepartments(long departments) {
        this.departments = departments;
    }

    public long getLeaves() {
        return leaves;
    }

    public void setLeaves(long leaves) {
        this.leaves = leaves;
    }

    public long getAttendance() {
        return attendance;
    }

    public void setAttendance(long attendance) {
        this.attendance = attendance;
    }
}