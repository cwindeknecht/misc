import { Component } from '@angular/core';
import { trigger, animate, style, transition, keyframes } from '@angular/animations';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(200, keyframes([style({ transform: 'translateX(300px)' }), style({ transform: 'translateX(0)' })])),
      ]),
      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(100, keyframes([style({ transform: 'translateX(0px)' }), style({ transform: 'translateX(300px)' })])),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Todos';
  todoArray = [];
  todoError = false;
  // Used in the multiple delete buttons of long todo items
  // lengths = [];

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  todoSubmit(value) {
    if (value.title !== '' && value.title !== null) {
      this.todoArray.push(value);
      // Used in the multiple delete buttons of long todo items
      // this.lengths.push(new Array(Math.floor(value.todo.length / 150) + 1));
    }
  }

  // Log from the html
  log(val) {
    console.log(`LOG APP`,val);
  }

  // constructor(private http: Http) {
  //   http.get('http://localhost:3000/todos.json').subscribe(res => (this.todos = res.json()));
  // }
}