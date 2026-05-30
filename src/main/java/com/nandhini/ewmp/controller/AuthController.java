package com.nandhini.ewmp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.nandhini.ewmp.dto.LoginRequest;
import com.nandhini.ewmp.dto.LoginResponse;
import com.nandhini.ewmp.entity.Employee;
import com.nandhini.ewmp.repository.EmployeeRepository;
import com.nandhini.ewmp.jwt.JwtService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request) {

        Employee employee =
                employeeRepository.findByEmail(request.getEmail())
                        .orElse(null);

        if (employee == null) {
            return ResponseEntity.badRequest()
                    .body("Invalid Email");
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                employee.getPassword())) {

            return ResponseEntity.badRequest()
                    .body("Invalid Password");
        }

        String token =
                jwtService.generateToken(employee.getEmail());

        return ResponseEntity.ok(
                new LoginResponse(token));
    }
}