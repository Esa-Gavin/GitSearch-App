import { UserService } from './../../services/user.service';

import { Users } from 'src/app/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mtumiaji: Users[];
  tafutaMtumiaji(value) {
    this.userService.tafutaMtumiaji(value).then(
      (success) => {
        this.mtumiaji = this.userService.mtumiaji;
        console.log(this.mtumiaji);
      },
      (error) => {
        console.log(this.mtumiaji);
      }
    );
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.tafutaMtumiaji('Gavin-Kariuki');
  }
}
