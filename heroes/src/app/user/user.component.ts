import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  username;
  password;
  confirm;
  login = true;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  log(input) {
    console.log('USER LOG', input);
  }

  toggleUser(bool) {
    this.login = bool;
  }

  loginUser() {
    let username = this.username.trim();
    let password = this.password.trim();
    this.userService.loginUser({ username, password } as User).subscribe(user => {
      console.log("USER COMPONENT", user);
    });
  }

  registerUser() {
    let username = this.username.trim();
    let password = this.password.trim();
    if (username && password === this.confirm) {
      this.userService.addUser({ username, password } as User).subscribe(user => {
        console.log("USER", user);
      });
    } else {
      alert('Passwords Must Match');
    }
  }
}
