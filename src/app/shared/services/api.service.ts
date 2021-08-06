import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalConstants} from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  async get(path: string, showLoading = true): Promise<any> {
    let response: any;

    if (showLoading) {
      GlobalConstants.showLoading = true;
    }

    response = await this.http.get<any>(path)
      .toPromise()
      .then(resp => {

        if (showLoading) {
          GlobalConstants.showLoading = false;
        }

        return resp;
      })
      .catch((error: any) => {

        if (showLoading) {
          GlobalConstants.showLoading = false;
        }

        return error.error;
      });
    return response;
  }

  async post(path: string, params: string, showLoading = true): Promise<any> {
    let response: any;
    GlobalConstants.showLoading = showLoading;

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    response = await this.http.post(path, params, httpOptions)
      .toPromise()
      .then(resp => {
        GlobalConstants.showLoading = false;
        return resp;
      })
      .catch((error: any) => {
        GlobalConstants.showLoading = false;
        return error.error;
      });
    return response;
  }

}
