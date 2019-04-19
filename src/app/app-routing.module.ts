import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
{path: 'user/:username', component: UserComponent},
{path: 'todo', component: TodoComponent},
{path: '**', redirectTo: 'todo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
