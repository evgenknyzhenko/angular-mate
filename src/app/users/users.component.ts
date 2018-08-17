import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {User} from '../_model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Array<User> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.userService.getAll()
      .subscribe(
        resp => this.users = resp,
        err => console.log('Users cant be fetched')
      );
  }
}
