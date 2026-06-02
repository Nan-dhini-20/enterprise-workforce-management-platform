package com.nandhini.ewmp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nandhini.ewmp.dto.LoginRequest;
import com.nandhini.ewmp.dto.LoginResponse;
import com.nandhini.ewmp.entity.Employee;
import com.nandhini.ewmp.jwt.JwtService;
import com.nandhini.ewmp.repository.EmployeeRepository;

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

        System.out.println("LOGIN API HIT");
        System.out.println("EMAIL = " + request.getEmail());

        Employee employee =
                employeeRepository.findByEmail(
                        request.getEmail())
                        .orElse(null);

        System.out.println("EMPLOYEE = " + employee);

        if (employee == null) {
                return ResponseEntity.badRequest()
                        .body("Invalid Email");
        }

        System.out.println("PASSWORD CHECK START");

        if (!passwordEncoder.matches(
                request.getPassword(),
                employee.getPassword())) {

                return ResponseEntity.badRequest()
                        .body("Invalid Password");
        }

        System.out.println("PASSWORD MATCHED");

        String token =
                jwtService.generateToken(
                        employee.getEmail());

        System.out.println("TOKEN GENERATED");

        return ResponseEntity.ok(
                new LoginResponse(token));
        }
}