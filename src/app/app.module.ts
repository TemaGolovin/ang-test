import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './components/nav/nav.module';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { PostIdModule } from './components/postId/postId.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    LoginModule,
    HomeModule,
    HttpClientModule,
    PostIdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
