import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [MatCardModule],
  exports: [PostComponent],
})
export class PostModule {}
