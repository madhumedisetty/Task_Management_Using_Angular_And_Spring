# Task Management System

A full-stack Task Management System built with Angular for the frontend and Spring Boot for the backend. This application allows users to efficiently manage tasks by creating, updating, deleting, and categorizing them.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Exception Handling](#exception-handling)
- [Screenshots](#screenshots)

## Features

- Create, Read, Update, and Delete tasks
- Filter tasks by category and priority
- Search for tasks by keywords
- Mark tasks as completed
- Responsive design for various screen sizes

## Technologies Used

- **Frontend:** Angular 14+
- **Backend:** Spring Boot 2.7+
- **Database:** MySQL
- **HTTP Client:** Angular's HttpClient module for API communication
- **Build Tool:** Maven (Backend), npm (Frontend)
- **Version Control:** Git

## Prerequisites

- Node.js (v14 or later)
- Angular CLI
- Java JDK (v11 or later)
- Maven
- MySQL (or any preferred database)

## Getting Started

### Backend Setup

1. Clone the repository:
   ```
   git clone https://github.com/madhumedisetty/Task_Management_Using_Angular_And_Spring.git
   ```

2. Navigate to the backend directory:
   ```
   cd task-management-system/backend
   ```

3. Configure the database connection in `src/main/resources/application.properties`.

4. Build and run the Spring Boot application:
   ```
   mvn clean install
   mvn spring-boot:run
   ```

The backend server will start on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd task-management-system/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the Angular development server:
   ```
   ng serve
   ```

The frontend application will be available at `http://localhost:4200`.

## API Endpoints

### Task Management

- **Get All Tasks:** `GET /api/v1/tasks`
- **Get Task by ID:** `GET /api/v1/tasks/{id}`
- **Create a Task:** `POST /api/v1/tasks`
- **Update a Task:** `PUT /api/v1/tasks/{id}`
- **Delete a Task:** `DELETE /api/v1/tasks/{id}`
- **Get Tasks by Category:** `GET /api/v1/tasks/category?category={category}`
- **Mark Task as Completed:** `PUT /api/v1/tasks/{id}/completed`
- **Search Tasks:** `GET /api/v1/tasks/search?query={query}`
- **Get Tasks by Priority:** `GET /api/v1/tasks/priority?priority={priority}`

## Frontend Components

- **TaskListComponent:** Displays the list of tasks and handles filtering
- **CreateTaskComponent:** Form for creating new tasks
- **UpdateTaskComponent:** Form for updating existing tasks
- **SearchBarComponent:** Handles task searching functionality
- **TaskService:** Manages HTTP requests to the backend API

## Exception Handling

- **ResourceNotFoundException:** Thrown when a requested task is not found in the database
- The API returns a `404 Not Found` status with a message indicating the issue

## Screenshots

![Screenshot 2024-11-04 170655](https://github.com/user-attachments/assets/7f2d56cd-b120-486d-b50c-835937dedc62)

*Task List View*

![Screenshot 2024-11-04 170704](https://github.com/user-attachments/assets/627838f4-14b8-43ea-9fcb-97d95835ee9a)

*Create Task Form*

![Screenshot 2024-11-04 170715](https://github.com/user-attachments/assets/d81fd214-d082-4d8b-9c61-505437f7c577)

*Update Task Form*

![Screenshot 2024-11-04 170728](https://github.com/user-attachments/assets/f57ed36e-4aca-4133-9cab-9903b7854bd3)

*Delete*

![Screenshot 2024-11-05 171942](https://github.com/user-attachments/assets/af6c8f00-33e1-45d3-ab5b-782d5d6fa7c8)

*Search functionality*
