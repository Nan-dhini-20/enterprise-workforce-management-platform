# Enterprise Workforce Management Platform (EWMP)

A Spring Boot based Enterprise Workforce Management Platform designed to manage employees, departments, leave requests, authentication, and role-based access control within an organization.

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

## ⭐ Project Highlights

- Layered Architecture (Controller → Service → Repository)
- DTO & Mapper Pattern Implementation
- JWT-Based Authentication & Authorization
- Role-Based Access Control (RBAC)
- BCrypt Password Encryption
- Global Exception Handling
- Swagger/OpenAPI Documentation
- MySQL Database Integration

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
- JWT Token Validation
- JWT Authentication Filter
- Role-Based Access Control (ADMIN / EMPLOYEE)
- Protected REST APIs

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
├── mapper
├── exception
├── security
├── jwt
└── config
```

---

## 🔑 Authentication Flow

1. User logs in using email and password.
2. Password is verified using BCrypt.
3. JWT token is generated and returned.
4. Client sends the JWT token in the Authorization header.
5. JwtAuthenticationFilter validates the token.
6. Spring Security authenticates the user.
7. Access is granted based on user roles (ADMIN / EMPLOYEE).

---

## 🗄️ Database Tables

- employees
- departments
- leave_requests

---

## 📖 API Documentation

After running the application:

### Swagger UI

```text
http://localhost:8080/swagger-ui/index.html
```

### OpenAPI Docs

```text
http://localhost:8080/v3/api-docs
```

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

### Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ewmp_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
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

## 🔐 API Security

### Login Endpoint

```http
POST /auth/login
```

Request Body:

```json
{
  "email": "nandhini@gmail.com",
  "password": "admin123"
}
```

Response:

```json
{
  "token": "your-jwt-token"
}
```

### Using JWT Token

Add the token in Swagger Authorize button or Postman:

```text
Bearer your-jwt-token
```

---

## 👥 Roles

### ADMIN
- Manage Employees
- Manage Departments
- Access Protected APIs

### EMPLOYEE
- Access Employee-Level APIs
- Restricted from Admin APIs

---

## 📈 Current Progress

- ✅ Employee Management CRUD
- ✅ Department Management CRUD
- ✅ Leave Management CRUD
- ✅ DTO Layer
- ✅ Mapper Layer
- ✅ Validation
- ✅ Global Exception Handling
- ✅ Swagger Documentation
- ✅ BCrypt Password Hashing
- ✅ JWT Authentication
- ✅ JWT Authorization Filter
- ✅ Role-Based Access Control (ADMIN / EMPLOYEE)
- ✅ Protected REST APIs

---

## 🔮 Future Enhancements

- Attendance Management
- DTO Mapping using MapStruct
- Unit Testing (JUnit & Mockito)
- Refresh Token Support
- Docker Deployment
- CI/CD Pipeline
- Audit Logging
- Pagination & Sorting

---

## 👩‍💻 Author

**Nandhini**

Enterprise Workforce Management Platform (EWMP)

Built using Java, Spring Boot, Spring Security, JWT, MySQL, JPA, and Swagger OpenAPI.