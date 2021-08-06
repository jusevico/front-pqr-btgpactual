import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-solicitud-origen',
  templateUrl: './modal-solicitud-origen.component.html',
  styleUrls: ['./modal-solicitud-origen.component.scss']
})
export class ModalSolicitudOrigenComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
