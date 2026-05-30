# Enterprise Workforce Management Platform (EWMP)

A Spring Boot based Enterprise Workforce Management Platform designed to manage employees, departments, attendance, leave requests, and authentication within an organization.

---

## 🚀 Tech Stack

- Java 17
- Spring Boot 3.5
- Spring Data JPA
- Spring Security
- JWT Authentication
- MySQL
- Maven
- Swagger OpenAPI

---

## 📌 Features Implemented

### Employee Management
- Add Employee
- View Employee
- Update Employee
- Delete Employee

### Department Management
- Add Department
- View Department
- Update Department
- Delete Department

### Leave Management
- Apply Leave
- View Leave Requests
- Update Leave Status
- Delete Leave Requests

### Security & Authentication
- BCrypt Password Encryption
- User Login API
- JWT Token Generation

### Validation & Error Handling
- Bean Validation
- Global Exception Handling
- Custom Resource Not Found Exception

### API Documentation
- Swagger UI Integration
- OpenAPI Documentation

---

## 📂 Project Structure

```text
src/main/java/com/nandhini/ewmp

├── controller
├── service
├── repository
├── entity
├── dto
├── exception
├── security
├── jwt
└── config
```

---

## 🔑 Authentication Flow

1. User logs in using email and password.
2. Password is verified using BCrypt.
3. JWT token is generated.
4. Token is returned to the client.
5. Token will be used for securing APIs in upcoming phases.

---

## 🗄️ Database Tables

- employees
- departments
- leave_requests

---

## 📖 API Documentation

After running the application:

Swagger UI:

http://localhost:8080/swagger-ui/index.html

OpenAPI Docs:

http://localhost:8080/v3/api-docs

---

## ⚙️ How to Run

### Clone Repository

```bash
git clone https://github.com/Nan-dhini-20/enterprise-workforce-management-platform.git
```

### Navigate to Project

```bash
cd enterprise-workforce-management-platform
```

### Run Application

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

---

## 📈 Current Progress

- ✅ Employee Management CRUD
- ✅ Department Management CRUD
- ✅ Leave Management CRUD
- ✅ DTO Layer
- ✅ Validation
- ✅ Exception Handling
- ✅ Swagger Documentation
- ✅ BCrypt Password Hashing
- ✅ JWT Login Authentication

---

## 🔮 Upcoming Features

- JWT Request Validation Filter
- Role Based Access Control (ADMIN / EMPLOYEE)
- Attendance Management
- DTO Mapping using MapStruct
- Unit Testing (JUnit & Mockito)
- Refresh Token Support
- Docker Deployment
- CI/CD Pipeline

---

## 👩‍💻 Author

Nandhini

Enterprise Workforce Management Platform – Spring Boot Backend Project