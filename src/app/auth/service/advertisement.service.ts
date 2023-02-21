import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import {Advertisement} from "../models/advertisement";

@Injectable({ providedIn: 'root' })
export class AdvertisementService {
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
    console.log('currentUser: '+currentUser.token)
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer '+currentUser.token);
    headers = headers.append('accept', '*/*');

    return this._http.get<any[]>(`${environment.apiUrl}/api/advertisements`,
        {
          headers: headers
        }
    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<Advertisement>(`${environment.apiUrl}/api/advertisements/${id}`);
  }

  delete(id: number) {
    return this._http.delete(`${environment.apiUrl}/api/advertisements/${id}`);
  }
}
