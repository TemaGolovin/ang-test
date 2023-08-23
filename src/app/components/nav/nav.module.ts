import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  exports: [NavComponent],
})
export class NavModule {}
