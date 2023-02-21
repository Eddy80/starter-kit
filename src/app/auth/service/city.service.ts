import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'environments/environment';
import {City} from "../models/City";


@Injectable({ providedIn: 'root' })
export class CityService {
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

    return this._http.get<City[]>(`${environment.apiUrl}/api/cities`,
        {
          headers: headers
        }
    );
  }

  getAllByCountry(countryId: number) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer '+currentUser.token);
    headers = headers.append('accept', '*/*');

    return this._http.get<City[]>(`${environment.apiUrl}/api/countries/${countryId}/citiesbycountryid`,
        {
          headers: headers
        }
    );
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<City>(`${environment.apiUrl}/cities/${id}`);
  }
}
