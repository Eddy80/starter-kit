import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import {Observable} from "rxjs";
import {getToken} from "codelyzer/angular/styles/cssLexer";

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  /**
   * Get all users
   */
  getAll() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer '+currentUser.token);
    headers = headers.append('accept', '*/*');

    return this._http.get<User[]>(`${environment.apiUrl}/api/allusers`,
        {
          headers: headers
        }
    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
