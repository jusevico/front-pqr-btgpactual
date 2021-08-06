import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from './solicitudes.service';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';
import {ClientesService} from '../clientes/clientes.service';
import {Auth} from '../../shared/auth';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
  providers: [DatePipe]
})
export class SolicitudesComponent implements OnInit {

  clienteID = '610cd13caf068b86ce5b3d61';
  cliente = null;
  data = [];

  constructor(private solicitudService: SolicitudesService,
              private clienteService: ClientesService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getCliente();
    await this.getSolicitudesByClienteID();
  }

  async getCliente(): Promise<void> {
    this.cliente = await this.clienteService.getByID(this.clienteID);
    Auth.setCliente(this.cliente);
  }

  async getSolicitudesByClienteID(): Promise<void> {
    this.data = await this.solicitudService.getByClienteID(this.clienteID);
    this.data.forEach((solicitud) => {
      solicitud.permiteReclamo = this.permiteAgregarReclamo(solicitud);
    });
  }

  permiteAgregarReclamo(solicitud): boolean {

    const fechaActual = moment(new Date());
    const fechaSolicitud = moment(solicitud.fecha);
    const dias = fechaActual.diff(fechaSolicitud, 'days');

    if (!solicitud.tipo.inicial) {
      return false;
    }

    return !!(solicitud.respuestaAdministrativa || dias > 5);

  }

}
