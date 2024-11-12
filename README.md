# Task Management Application

This is a Task Management Application that allows users to manage their tasks with features like filtering by category and priority, updating completion status, and sorting tasks by due date.

## Features

- **Task Creation**: Add tasks with titles, descriptions, categories, priorities, due dates, and completion statuses.
- **Task List**: View a list of tasks with detailed information (title, description, due date, priority).
- **Filter Tasks**: Filter tasks by category (Personal, Work, Shopping) and priority (High, Medium, Low).
- **Sorting Tasks**: Sort tasks based on due date (earliest to latest).
- **Update Tasks**: Edit task details, including title, description, due date, category, and priority.
- **Mark Completion**: Mark tasks as completed with a checkbox. Completion status is updated in real-time.
- **Delete Tasks**: Delete tasks from the list.
- **Task Analysis**: View a Pie Chart showing the percentage of tasks that are completed versus the ones that are still pending.

---

## Prerequisites

- **Backend**: Java 17+, Spring Boot 3.0+, and a database (e.g., MySQL).
- **Frontend**: Node.js, Angular CLI.
  
---

## Running the Project

### Backend Setup

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/madhumedisetty/Task_Management_Using_Angular_And_Spring/backend.git
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   mvn clean install
   ```

3. **Configure database settings** in `application.properties`.

4. **Start the backend server**:
   Run the `TaskManagementAppBackendApplication` file.

   The backend will run on `http://localhost:8080` (or a configured port).

---

### Frontend Setup

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/madhumedisetty/Task_Management_Using_Angular_And_Spring/frontend.git
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API URL** in `task.service.ts` to point to the backend server.

4. **Start the frontend server**:
   ```bash
   ng serve
   ```

   The frontend will be accessible at `http://localhost:4200`.

---

## API Endpoints

| HTTP Method | Endpoint                      | Description                                                  |
|-------------|-------------------------------|--------------------------------------------------------------|
| **GET**     | `/api/v1/tasks`               | Retrieve all tasks.                                          |
| **POST**    | `/api/v1/tasks`               | Create a new task.                                           |
| **GET**     | `/api/v1/tasks/{id}`          | Retrieve a task by ID.                                       |
| **PUT**     | `/api/v1/tasks/{id}`          | Update a task by ID.                                         |
| **DELETE**  | `/api/v1/tasks/{id}`          | Delete a task by ID.                                         |
| **GET**     | `/api/v1/tasks/filter`        | Filter tasks by category, priority, or both.                 |
| **PUT**     | `/api/v1/tasks/{id}/completed`| Mark a task as completed.                                    |
| **GET**     | `/api/v1/tasks/search`        | Search tasks by title (case-insensitive).                    |

---

## Frontend Project Structure

1. **Components**: Task list, task creation, task update, and task details components.
2. **Services**: `TaskService` for handling HTTP requests.
3. **Data Flow**:
   - **Components** interact with `TaskService` to fetch and manipulate data.
   - **Service** communicates with backend API to retrieve/update data.
   - **Backend** processes requests and returns the data to display.

---

## Screenshots

_Add screenshots of your project here to showcase its user interface._

1. **Task List View**:
   ![Screenshot 2024-11-11 193646](https://github.com/user-attachments/assets/fc1e02ae-a688-41be-83f8-44d22e282386)

2. **Add Task**:
   ![Screenshot 2024-11-11 193724](https://github.com/user-attachments/assets/5ff08626-b151-40b0-99b2-7618d6c31dce)
   
3. **Update Task Form**:
   ![Screenshot 2024-11-11 193736](https://github.com/user-attachments/assets/7e9e43b9-f324-47e0-9cc1-53de620aca14)

4. **Delete Task**:
   ![Screenshot 2024-11-11 193745](https://github.com/user-attachments/assets/ce6b0e1c-02a5-44f6-8889-fe5be5d0f155)

5. **Searching**:
    ![Screenshot 2024-11-11 193702](https://github.com/user-attachments/assets/068cf87e-7275-4566-829b-c631435694b5)

6. **Filtering**:
   ![Screenshot 2024-11-11 193803](https://github.com/user-attachments/assets/4dac4e73-e31b-42b9-ab07-1c0a95e4ad0b)

7. **Task Analysis**:
   ![Screenshot 2024-11-11 193818](https://github.com/user-attachments/assets/cdf5c23b-557e-412e-825a-d4abb7473496)

