import { NgModule } from '@angular/core';

import { PostIdComponent } from './postId.component';
import { PostModule } from '../home/post/post.module';

@NgModule({
  declarations: [PostIdComponent],
  imports: [PostModule],
  exports: [PostIdComponent],
})
export class PostIdModule {}
