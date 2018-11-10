import { Component, Input } from '@angular/core';
import { Todo } from './todo';

// The @Component decorator provides the Angular metadata for the component.
@Component({
  //The CSS selector name, todo-detail, will match the element tag that identifies this component within a parent component's template.
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent {
  @Input() todo: Todo;

  // Log from the html
  log(val) {
    console.log(`LOG DETAIL`, val);
  }
}
