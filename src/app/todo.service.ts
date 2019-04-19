import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Array<Object> = []; //Object[]
  private nextID: number = 0;
  constructor() { }


// add Todo
addTodo(todo: Object){
  todo['id'] = this.nextID;
  todo['completed'] = false;
  this.nextID++;
  this.todos.push(todo)
}

// Delete Todo
deleteTodo(id: number){
  let index = this.todos.findIndex(todo=> todo['id'] === id);
  // let index = this.todos.findIndex(
  // function(todo){
  // return todo.id === id
  // })
  this.todos.splice(index, 1);
}

// Filter By Username
getByUsername(username){
  return this.todos.filter(todo => todo['username'] === username)
}

// Get All of them
/// this.todos = this.todoService.allTodos
get allTodos(){
  console.log("from service", this.todos)
  return this.todos;
}
// this.todos = this.todoService.getAllTodos();
// getAllTodos(){
//   return this.todos;
// }


}

