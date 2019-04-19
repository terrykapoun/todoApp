import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Object[];
  @Input() isUserPage: boolean;
  @Output() deleteEvent = new EventEmitter<number>()
  searchString: string = ""
  sortString: string = "id"
  constructor() {console.log(this.todos) }

  deleteTodo(id) {
    this.deleteEvent.emit(id)
  }

  ngOnInit() {
  }

}
