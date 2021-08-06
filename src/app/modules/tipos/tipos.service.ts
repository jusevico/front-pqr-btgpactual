import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private api: ApiService) {
  }

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/tipos/`);
  }

}
