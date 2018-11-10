import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailComponent } from './components/todo-detail.component';

const routes: Routes = [
  { path: 'todo-details', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

