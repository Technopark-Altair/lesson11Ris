import { IUser } from './../../interfaces/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
  });
  users: IUser[] | undefined;

  get phoneControl(): FormControl {
    return this.profileForm.get('phone') as FormControl;
  }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }
  onSubmit(): void {
    const user = this.profileForm.value as IUser;
    this.dataService.register(user);
    this.router.navigate(['']);
  }
}
