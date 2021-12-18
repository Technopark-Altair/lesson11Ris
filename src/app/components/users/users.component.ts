import { DataService } from './../../services/data.service';
import { IUser } from './../../interfaces/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[] | undefined;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  showDetails(email: string): void {
    this.router.navigate(['users', 'user', email]);
  }
}
