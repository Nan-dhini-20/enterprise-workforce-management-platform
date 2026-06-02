# Enterprise Workforce Management Platform (EWMP)

A full-stack Enterprise Workforce Management Platform designed to manage employees, departments, attendance, leave requests, authentication, and role-based access control within an organization.

---

## 🚀 Tech Stack

### Backend
- Java 17
- Spring Boot 3.5
- Spring Data JPA
- Spring Security
- JWT Authentication
- MySQL
- Maven
- Swagger OpenAPI

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- JavaScript
- HTML5
- CSS3

---

## ⭐ Project Highlights

- Full Stack Application (Spring Boot + React)
- Layered Architecture (Controller → Service → Repository)
- DTO & Mapper Pattern Implementation
- JWT-Based Authentication & Authorization
- Role-Based Access Control (RBAC)
- BCrypt Password Encryption
- Global Exception Handling
- RESTful APIs
- Swagger/OpenAPI Documentation
- MySQL Database Integration
- Protected Frontend Routes
- Axios API Integration

---

## 📌 Features Implemented

### 🔹 Authentication & Security
- User Login
- JWT Token Generation
- JWT Token Validation
- JWT Authentication Filter
- Protected APIs
- Protected React Routes
- Role-Based Access Control (ADMIN / EMPLOYEE)
- BCrypt Password Encryption

### 🔹 Employee Management
- Add Employee
- View Employees
- Update Employee
- Delete Employee

### 🔹 Department Management
- Add Department
- View Departments

### 🔹 Leave Management
- Apply Leave
- View Leave Requests
- Delete Leave Request

### 🔹 Attendance Management
- Mark Attendance
- View Attendance Records
- View Attendance By ID

---

## 📂 Project Structure

```text
EWMP
│
├── src/main/java/com/nandhini/ewmp
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── mapper
│   ├── exception
│   ├── security
│   └── jwt
│
├── src/main/resources
│
└── ewmp-frontend
    ├── src
    │   ├── pages
    │   ├── services
    │   ├── components
    │   └── routes
    └── public
```

---

## 🔑 Authentication Flow

1. User logs in using email and password.
2. Password is verified using BCrypt.
3. JWT token is generated.
4. Token is stored in Local Storage.
5. React sends JWT in Authorization Header.
6. JwtAuthenticationFilter validates the token.
7. Spring Security authenticates the user.
8. Access is granted based on role permissions.

---

## 🗄️ Database Tables

- employees
- departments
- leave_requests
- attendance

---

## 🌐 Frontend Pages

### Authentication
- Login Page

### Employee Module
- Employee List
- Add Employee
- Update Employee

### Department Module
- Department List
- Add Department

### Leave Module
- Leave Requests List
- Apply Leave

### Attendance Module
- Attendance List
- Mark Attendance

### Dashboard
- Employee Management
- Department Management
- Leave Management
- Attendance Management
- Logout

---

## 📖 API Documentation

### Swagger UI

```text
http://localhost:8080/swagger-ui/index.html
```

### OpenAPI Docs

```text
http://localhost:8080/v3/api-docs
```

---

## ⚙️ Backend Setup

### Clone Repository

```bash
git clone https://github.com/Nan-dhini-20/enterprise-workforce-management-platform.git
```

### Navigate to Project

```bash
cd enterprise-workforce-management-platform
```

### Configure Database

Update:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ewmp_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Run Backend

```bash
mvn spring-boot:run
```

---

## ⚙️ Frontend Setup

Navigate to frontend:

```bash
cd ewmp-frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 🔐 Login API

### Endpoint

```http
POST /auth/login
```

### Request

```json
{
  "email": "nandhini@gmail.com",
  "password": "admin123"
}
```

### Response

```json
{
  "token": "jwt-token"
}
```

---

## 👥 Roles

### ADMIN

- Manage Employees
- Manage Departments
- View Leave Requests
- View Attendance
- Access Protected APIs

### EMPLOYEE

- Access Employee Features
- View Protected Resources
- Restricted from Admin-only APIs

---

## 📈 Current Progress

### Backend
- ✅ Employee CRUD
- ✅ Department Management
- ✅ Leave Management
- ✅ Attendance Management
- ✅ DTO Layer
- ✅ Mapper Layer
- ✅ Validation
- ✅ Global Exception Handling
- ✅ JWT Authentication
- ✅ JWT Authorization
- ✅ Spring Security
- ✅ Swagger Documentation

### Frontend
- ✅ React + Vite Setup
- ✅ Login Page
- ✅ Dashboard
- ✅ Employee Management UI
- ✅ Department Management UI
- ✅ Leave Management UI
- ✅ Attendance Management UI
- ✅ JWT Route Protection
- ✅ Axios Integration

---

## 🔮 Future Enhancements

- Leave Approval / Rejection Workflow
- Role-Based Dashboard
- Search Employees
- Attendance Reports
- Analytics Dashboard
- Pagination & Sorting
- Docker Deployment
- CI/CD Pipeline
- Unit Testing (JUnit & Mockito)
- Refresh Token Support
- Audit Logging
- Cloud Deployment (AWS)

---

## 👩‍💻 Author

**Nandhini**

Enterprise Workforce Management Platform (EWMP)

Built using Java, Spring Boot, Spring Security, JWT, React, Vite, MySQL, JPA, and Swagger OpenAPI.