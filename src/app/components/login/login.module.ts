import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [MatButtonModule, MatCardModule, ReactiveFormsModule, CommonModule],
  exports: [LoginComponent],
})
export class LoginModule {}
