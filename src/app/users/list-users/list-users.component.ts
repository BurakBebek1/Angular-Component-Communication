import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  name: string = 'Burak';
  listUsers = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   this.listUsers = this.usersService.getUsers();
  }



  updateUser(event) {
    console.log(event);
  }

}
