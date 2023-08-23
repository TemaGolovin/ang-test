import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-postId',
  templateUrl: './postId.component.html',
  styleUrls: ['./postId.component.css'],
})
export class PostIdComponent {
  constructor(
    private router: Router,
    private service: HttpService,
    private activatedroute: ActivatedRoute,
  ) {
    this.activatedroute.params.subscribe((id) => {
      this.postId = id;
    });
  }

  postId: any;
  postTitle: any;
  postBody: any;

  ngOnInit(): void {
    this.checkAuth();
    this.service.getPostId(this.postId.id).subscribe((post: Post) => {
      this.postTitle = post.title;
      this.postBody = post.body;
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
