import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: any = {task: '', username: ''}
  todos: any[] = []
  
  constructor(private todoService: TodoService){console.log("todo comp", this.todoService.allTodos)
    this.todos = this.todoService.allTodos;
   }
  
   addTodo(){
    this.todoService.addTodo(this.todo);
    this.todo = {task: '', username: ''}
    this.todos = this.todoService.allTodos;
   }

  ngOnInit() {
  }

}
