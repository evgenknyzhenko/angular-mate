import { Component, OnInit } from '@angular/core';
import {User} from '../_model/user';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  private user;
  private msg;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.user = new User();
    this.msg = '';
  }

  public addUser(): void {
    this.userService.addUser(this.user)
      .subscribe(
        resp => {
          this.msg = 'User was created succesfully';
          this.user = new User();
        },
        err => {
          this.msg = 'User was not added';
        }
      );
  }
}
