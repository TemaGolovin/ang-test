import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private router: Router) {}

  @Input() title: string = 'Title post';
  @Input() body: string = 'Body post';
  @Input() id: number = 0;

  goPostPage(event: any) {
    const idTargetPost =
      event.target.parentNode.id || event.target.parentNode.parentNode.parentNode.id;
    this.router.navigate(['', idTargetPost]);
  }
}
