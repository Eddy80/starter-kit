import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import {AdvertisementCategory} from "../models/advertisementCategory";



@Injectable({ providedIn: 'root' })
export class CategoryService {
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

    return this._http.get<AdvertisementCategory[]>(`${environment.apiUrl}/api/categories`,
        {
          headers: headers
        }

    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<AdvertisementCategory>(`${environment.apiUrl}/categories/${id}`);
  }
}
