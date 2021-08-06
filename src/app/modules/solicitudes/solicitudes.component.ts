import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from './solicitudes.service';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
  providers: [DatePipe]
})
export class SolicitudesComponent implements OnInit {

  clienteID = '610cd13caf068b86ce5b3d61';
  data = [];

  constructor(private solicitudService: SolicitudesService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getSolicitudesByClienteID();
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
