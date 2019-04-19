import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


  export class UserComponent implements OnInit {
    task: string = ''
    todos: Object[] = [];
    username: string;
  

  constructor(private todoService: TodoService, private actr: ActivatedRoute) { 
    this.username = this.actr.snapshot.params.username;
    this.todos = this.todoService.getByUsername(this.username)
  }
  addTodo(){
    let todo = {
      task: this.task,
      username: this.username
    }

    this.todoService.addTodo(todo)
    this.task = ''
    this.todos = this.todoService.getByUsername(this.username)
  }

  deleteTodo(id){
    this.todoService.deleteTodo(id);
     this.todos = this.todoService.getByUsername(this.username)
   }


  ngOnInit() {
  }

}
