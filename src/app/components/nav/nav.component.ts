import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private router: Router, private service: HttpService) {}

  isAuth = false;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (!token && !username) {
      this.isAuth = false;
    } else {
      this.isAuth = true;
    }
    this.service.isAuth$.subscribe((auth) => {
      this.isAuth = auth;
    });
  }

  goLogin() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.service.logOutUser(false);
    this.router.navigate(['login']);
  }

  goHome() {
    this.router.navigate(['']);
  }
}
