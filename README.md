# Task Management Application

This is a Task Management Application that allows users to manage their tasks with features like filtering by category and priority, updating completion status, and sorting tasks by due date. The application is built with a robust backend using Java and Spring Boot and a dynamic frontend using Angular.

## Features

- **Task Creation**: Add new tasks with essential details, including title, description, category, priority, due date, and completion status.
- **Task List**: View all tasks in a list format, complete with titles, descriptions, due dates, and priority levels for easy reference.
- **Filter Tasks**: Narrow down tasks by category (e.g., Personal, Work, Shopping) or priority (High, Medium, Low) for focused task management.
- **Sorting Tasks**: Sort tasks based on due date to prioritize upcoming tasks from earliest to latest.
- **Update Tasks**: Edit any task's details, such as title, description, due date, category, and priority.
- **Mark Completion**: Toggle tasks as completed with a checkbox, updating the completion status in real-time.
- **Delete Tasks**: Remove tasks from the list with a delete option.
- **Confirmation Pop-Up Notifications**: Receive a confirmation pop-up notification each time you add, update, or delete a task, ensuring all actions are acknowledged.
- **Task Analysis**: Track task progress with a Pie Chart showing the percentage of completed vs. pending tasks for a clear visual overview.

## Prerequisites

**Backend**: Java 17+, Spring Boot 3.0+, and a database (e.g., MySQL)  
**Frontend**: Node.js, Angular CLI

## Running the Project

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/madhumedisetty/Task_Management_Using_Angular_And_Spring/backend.git
   cd backend
   ```
2. Install dependencies:
   ```bash
   mvn clean install
   ```
3. Configure database settings in `application.properties`.
4. Start the backend server by running the `TaskManagementAppBackendApplication` file.
   - The backend will be accessible at `http://localhost:8080` (or your configured port).

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/madhumedisetty/Task_Management_Using_Angular_And_Spring/frontend.git
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the API URL in `task.service.ts` to match the backend server URL.
4. Start the frontend server:
   ```bash
   ng serve
   ```
   - The frontend will be accessible at `http://localhost:4200`.

## API Endpoints

| HTTP Method | Endpoint                       | Description                                  | 
|-------------|--------------------------------|----------------------------------------------|
| GET         | `/api/v1/tasks`                | Retrieve all tasks.                          |
| POST        | `/api/v1/tasks`                | Create a new task.                           |
| GET         | `/api/v1/tasks/{id}`           | Retrieve a task by ID.                       |
| PUT         | `/api/v1/tasks/{id}`           | Update a task by ID.                         |
| DELETE      | `/api/v1/tasks/{id}`           | Delete a task by ID.                         |
| GET         | `/api/v1/tasks/filter`         | Filter tasks by category, priority, or both. |
| PUT         | `/api/v1/tasks/{id}/completed` | Mark a task as completed.                    |
| GET         | `/api/v1/tasks/search`         | Search tasks by title (case-insensitive).    |

## Frontend Project Structure

- **Components**: Task List, Task Creation, Task Update, Task Deletion, Search bar components, each designed for a specific part of the user interface.
- **Services**: TaskService for handling HTTP requests to the backend API.

### Data Flow

1. Components interact with TaskService to fetch and manipulate task data.
2. TaskService communicates with the backend API to perform CRUD operations.
3. The backend processes requests and returns data for the frontend to display.

## Recording

https://github.com/user-attachments/assets/f6d38272-ea74-45ef-b5c3-57417a0d29a2



