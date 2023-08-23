import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PostModule],
  exports: [HomeComponent],
})
export class HomeModule {}
