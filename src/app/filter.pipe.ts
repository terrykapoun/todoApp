import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
              // todos      |     filter:searchString
  transform(todos: Object[], username: string ): Object[] {
    if(!username){
      
      return todos;
     }                  
    return todos.filter(todo=> todo['username'].toUpperCase().includes(username.toUpperCase()))


  }

}
