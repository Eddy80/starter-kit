import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import {Gender} from "../models/gender";


@Injectable({ providedIn: 'root' })
export class GenderService {
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

    return this._http.get<Gender[]>(`${environment.apiUrl}/api/genders`,
        {
          headers: headers
        }
    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<Gender>(`${environment.apiUrl}/users/${id}`);
  }
}
