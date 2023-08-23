import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes } from '../routes';
import { Observable, Subject } from 'rxjs';
import { AuthResponce } from '../interface/auth-responce';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public isAuth$ = new Subject<boolean>();

  loginUser(inputdata: object): Observable<AuthResponce> {
    return this.http.post<AuthResponce>(apiRoutes.login(), inputdata);
  }

  setAuth(auth: boolean) {
    this.isAuth$.next(auth);
  }

  logOutUser(auth: boolean) {
    this.setAuth(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  getPosts() {
    const token = localStorage.getItem('token');
    return this.http.get<Post[]>(apiRoutes.posts(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPostId(id: number) {
    const token = localStorage.getItem('token');
    return this.http.get<Post>(apiRoutes.post(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
