import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-completion-chart',
  templateUrl: './task-completion-chart.component.html',
  styleUrls: ['./task-completion-chart.component.css']
})
export class TaskCompletionChartComponent implements OnInit, OnChanges {

  @Input() tasks: Task[] = [];
  @Input() selectedCategory: string = ''; 
  public pieChartType: ChartType = 'pie';
  public pieChartData!: ChartData<'pie'>;
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#2b2d42', // Text color to match the project
          font: {
            size: 14,
          },
        }
      },
      tooltip: {
        enabled: true
      }
    }
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    console.log('OnInit: Initial tasks data:', this.tasks); // Debugging log
    this.updateChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks']) {
      console.log('Tasks data changed:', this.tasks);
      this.updateChartData();
    }
  }
  
  private updateChartData(): void {
    console.log('Updating chart data with tasks:', this.tasks);
    if (this.tasks.length === 0) {
      console.log('No tasks to display in chart.');
      return;
    }
    
    const completedTasks = this.tasks.filter(task => task.completed).length;
    const pendingTasks = this.tasks.length - completedTasks;
  
    console.log('Completed tasks:', completedTasks, 'Pending tasks:', pendingTasks);
  
    this.pieChartData = {
      labels: ['Completed', 'Pending'],
      datasets: [{
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#2b2d42', '#8d99ae'],
        borderColor: '#f8f8f8',
        borderWidth: 1
      }]
    };
  }
  
}