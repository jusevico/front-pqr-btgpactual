import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalSolicitudOrigenComponent} from '../modal-solicitud-origen/modal-solicitud-origen.component';
import {ModalVerRespuestasComponent} from '../modal-ver-respuestas/modal-ver-respuestas.component';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.scss']
})
export class SolicitudesListComponent implements OnInit {

  @Input() data = [];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModalSolicitudOrigen(solicitudOrigen): void {
    const dialogRef = this.dialog.open(ModalSolicitudOrigenComponent, {
      data: solicitudOrigen
    });
  }

  openModalVerRespuestas(respuestaAdministrativa): void {
    const dialogRef = this.dialog.open(ModalVerRespuestasComponent, {
      data: respuestaAdministrativa
    });
  }

}
