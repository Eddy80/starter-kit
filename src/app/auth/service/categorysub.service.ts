import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import {AdvertisementCategorySub} from "../models/advertisementCategorySub";



@Injectable({ providedIn: 'root' })
export class CategorysubService {
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

    return this._http.get<AdvertisementCategorySub[]>(`${environment.apiUrl}/api/subcategories`,
        {
          headers: headers
        }
    );
  }

  getAllByCategory(categoryId: number) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer '+currentUser.token);
    headers = headers.append('accept', '*/*');

    return this._http.get<AdvertisementCategorySub[]>(`${environment.apiUrl}/api/categories/${categoryId}/subcategoriesbycategoryid`,
        {
          headers: headers
        }
    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<AdvertisementCategorySub>(`${environment.apiUrl}/subcategories/${id}`);
  }
}
