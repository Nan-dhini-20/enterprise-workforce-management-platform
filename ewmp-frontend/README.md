# Enterprise Workforce Management Platform (EWMP)

A Full Stack Enterprise Workforce Management Platform built using Spring Boot and React for managing employees, departments, leave requests, and authentication within an organization.

---

## 🚀 Tech Stack

### Backend
- Java 17
- Spring Boot 3.5
- Spring Security
- JWT Authentication
- Spring Data JPA
- MySQL
- Maven
- Swagger OpenAPI

### Frontend
- React
- Vite
- React Router DOM
- Axios
- CSS

---

## 📌 Features Implemented

### Authentication
- User Login
- JWT Token Generation
- JWT Token Storage in Local Storage
- Protected Routes
- Logout Functionality

### Employee Management
- Add Employee
- View Employees
- Employee DTO Layer
- Secure Employee APIs

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

### Security
- Spring Security
- BCrypt Password Encryption
- JWT Authentication
- Role-Based Authorization
- Protected Frontend Routes

### Validation & Exception Handling
- Bean Validation
- Global Exception Handling
- Custom Resource Not Found Exception

### API Documentation
- Swagger UI
- OpenAPI Documentation

---

## 📂 Project Structure

```text
ewmp
│
├── src/main/java/com/nandhini/ewmp
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── exception
│   ├── jwt
│   ├── security
│   └── config
│
├── src/main/resources
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── components
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── pom.xml
└── README.md
```

---

## 🔑 Authentication Flow

1. User logs in using email and password.
2. Spring Security authenticates the user.
3. JWT token is generated.
4. Token is returned to the frontend.
5. Token is stored in browser Local Storage.
6. Protected APIs require a valid JWT token.
7. Protected React routes verify token existence before rendering.

---

## 🗄️ Database Tables

- employees
- departments
- leave_requests

---

## 🌐 Frontend Features

### Login Page
- User Authentication
- JWT Token Storage

### Dashboard
- Welcome Screen
- Navigation Links

### Employee Management
- View Employees
- Add Employee

### Security
- Protected Routes
- Logout Support

---

## 📖 API Documentation

After running the backend:

### Swagger UI

http://localhost:8080/swagger-ui/index.html

### OpenAPI Docs

http://localhost:8080/v3/api-docs

---

## ⚙️ Running the Backend

### Clone Repository

```bash
git clone https://github.com/Nan-dhini-20/enterprise-workforce-management-platform.git
```

### Navigate to Project

```bash
cd ewmp
```

### Run Backend

```bash
mvn spring-boot:run
```

---

## ⚙️ Running the Frontend

### Navigate to Frontend

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start React Application

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 📈 Current Progress

### Backend
- ✅ Employee CRUD
- ✅ Department CRUD
- ✅ Leave CRUD
- ✅ DTO Layer
- ✅ Validation
- ✅ Exception Handling
- ✅ Swagger Documentation
- ✅ BCrypt Password Encryption
- ✅ JWT Authentication
- ✅ Role-Based Authorization

### Frontend
- ✅ Login Page
- ✅ Dashboard
- ✅ Protected Routes
- ✅ Employee Listing
- ✅ Add Employee
- ✅ Logout Functionality
- ✅ Backend Integration using Axios

---

## 🔮 Upcoming Features

- Employee Update
- Employee Delete
- Department Frontend
- Leave Management Frontend
- Attendance Management
- Refresh Token Support
- Unit Testing (JUnit & Mockito)
- Docker Deployment
- CI/CD Pipeline
- Responsive UI Improvements

---

## 👩‍💻 Author

Nandhini

Java Full Stack Developer

Enterprise Workforce Management Platform (EWMP)
Spring Boot + React Full Stack Project