import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private api: ApiService) {
  }

  async getByClienteID(clienteID): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/solicitudes/get-by-cliente-id/${clienteID}`);
  }

  async crear(data): Promise<any> {
    return await this.api.post(`${environment.apiBackend}/solicitudes/nuevo`, JSON.stringify(data));
  }

  async getByID(id): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/solicitudes/${id}`);
  }

}
