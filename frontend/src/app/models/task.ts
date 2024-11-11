export class Task {
  public id: number=0;
  public title: string;
  public description: string;
  public dueDate: string|null;
  public  completed:  boolean;
  public  category: string;
  public  priority: 'High' | 'Medium' | 'Low';

  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: string | null,
    completed: boolean,
    category: string,
    priority: 'High' | 'Medium' | 'Low' 
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
    this.category = category;
    this.priority = priority;
  }
}