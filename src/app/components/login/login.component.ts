import { Component } from '@angular/core';
import { FormBuilder, /*FormControl, FormGroup,*/ Validators } from '@angular/forms';
// import { apiRoutes } from '../../routes';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: HttpService, private router: Router) {}

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  usernameValid = false;
  passwordValid = false;
  authError = false;

  // profileForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });
  onChangeUsername() {
    if (!this.loginForm.controls.username.valid) {
      this.usernameValid = true;
    } else {
      this.usernameValid = false;
    }
  }

  onChangePassword() {
    if (!this.loginForm.controls.password.valid) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe(
        (user) => {
          this.service.setAuth(true);
          localStorage.setItem('token', JSON.stringify(user.token));
          localStorage.setItem('username', JSON.stringify(user.username));
          this.router.navigate(['']);
        },
        (error) => {
          this.service.setAuth(false);
          if (error.status === 400) {
            this.authError = true;
          }
        },
      );
    } else {
      this.onChangeUsername();
      this.onChangePassword();
    }

    //  const { username, password } = this.profileForm.value;
    //  const response = await fetch(apiRoutes.login(), {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify({
    //      username,
    //      password,
    //    }),
    //  });
    //  const responseJson = await response.json();
    //  const token = responseJson.token;
    //  console.log(token);
  }
}
