import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private service: HttpService) {}

  postsRes: any;

  ngOnInit(): void {
    this.checkAuth();
    this.service.getPosts().subscribe((res) => {
      this.postsRes = res;
    });
  }

  checkAuth() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (!token && !username) {
      this.router.navigate(['login']);
    }
  }
}
