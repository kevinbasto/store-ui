import { Component, OnInit } from '@angular/core';
import { User } from './entities/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public tableHeaders = ["userId", "roleId", "name"];
  public users : Array<User>;
  public error : any;

  constructor(
    private usersService : UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.fetchUsers()
    .then((result) => {
      this.users = result;
    }).catch((err) => {
      this.error = err;
    });
  }

}
