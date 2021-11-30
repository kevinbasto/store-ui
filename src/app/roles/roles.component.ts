import { Component, OnInit } from '@angular/core';
import { Role } from './entities/role';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  
  public tableHeaders : Array<string> = ["roleId", "name", "authority"]
  public roles : Array<Role>;
  public error : any;

  constructor(
    private rolesService : RolesService
  ) { }

  ngOnInit(): void {
    this.rolesService.fetchRoles()
    .then((roles) => {
      this.roles = roles;
    }).catch((err) => {
      this.error = err;
    });
  }

}
