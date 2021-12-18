import { DataService } from './../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: IUser | undefined;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      const email = params['email'];
      this.user = this.dataService.getUser(email);
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
