import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit {

  @Input() data: string;
  @Input() name: string;
  @Output() updatedList = new EventEmitter();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    const users = this.usersService.getUsers();
    console.log(users);
  }

  updateUsers(){
    // const userObj = {id:10, name: 'Burak'};
    this.updatedList.emit('Merhaba');
  }

}
