import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private api: ApiService) {
  }

  async getByID(id): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/clientes/${id}`, false);
  }
}
