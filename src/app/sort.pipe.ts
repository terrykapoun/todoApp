import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todos: Object[], sortKey: string): Object[] {
    console.log(todos, sortKey);
     if (todos.length === 0)
     return todos;
  return todos.sort((a,b)=>{
    if(a[sortKey] > b[sortKey]){
      return 1
    }
    if(a[sortKey] < b[sortKey]){
      return -1
  }
    return 0;
  })

}
}