package com.example.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Task;

import com.example.backend.repository.TaskRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepo;
	
	//get All Task List
	@GetMapping("/tasks")
	public List<Task> getAllTask(){
		return taskRepo.findAll();
	}
	
	//create Task rest Api
	@PostMapping("/tasks")
	public ResponseEntity<Task> createTask(@RequestBody Task task) {    
		
		
		Task t = taskRepo.save(task);
		
		return new ResponseEntity<Task>(t, HttpStatus.CREATED);
	}
	
	//get task by id rest api
	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable Long id){
		Task task = taskRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task is not present with this is: "+id));
	
		return new ResponseEntity<Task>(task, HttpStatus.OK);
	}
	
	//update employee restApi
	@PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
    Task task = taskRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Task not found with this ID: " + id));
    
    // Updating fields with values from taskDetails
    task.setTitle(taskDetails.getTitle());
    task.setDescription(taskDetails.getDescription());
    task.setDueDate(taskDetails.getDueDate());
    task.setCategory(taskDetails.getCategory());
    task.setPriority(taskDetails.getPriority()); // Ensure priority field is updated
    task.setCompleted(taskDetails.isCompleted()); // Ensure completion status is updated

    Task updatedTask = taskRepo.save(task);
    return new ResponseEntity<>(updatedTask, HttpStatus.OK);
}
	
	
	//delete employee rest API
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id){
		Task task = taskRepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not found with this ID: "+id));
	
		taskRepo.delete(task);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return new ResponseEntity<Map<String,Boolean>>(response, HttpStatus.OK);
	}
	
	//category 
	@GetMapping("/tasks/filter")
public List<Task> getFilteredTasks(@RequestParam(required = false) String category, 
                                   @RequestParam(required = false) String priority) {
    if (category != null && priority != null) {
        return taskRepo.findByCategoryAndPriority(category, priority);
    } else if (category != null) {
        return taskRepo.findByCategory(category);
    } else if (priority != null) {
        return taskRepo.findByPriority(priority);
    } else {
        return taskRepo.findAll();
    }
}
	
	// Mark a task as completed
	@PutMapping("/tasks/{id}/completed")
	public ResponseEntity<Task> markTaskAsCompleted(@PathVariable Long id) {
	    Task task = taskRepo.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Task not found with this ID: " + id));

	    task.setCompleted(true); // Set the completed property to true
	    Task updatedTask = taskRepo.save(task);

	    return new ResponseEntity<Task>(updatedTask, HttpStatus.OK);
	}
    
	//search api end point
	@GetMapping("/tasks/search")
	public List<Task> searchTasks(@RequestParam("query") String query) {
	    // Implement search logic based on the query parameter
	    return taskRepo.findByTitleContainingIgnoreCase(query); // Example: Searching by task title
	}

}

