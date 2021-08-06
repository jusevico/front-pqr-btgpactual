import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ver-respuestas',
  templateUrl: './modal-ver-respuestas.component.html',
  styleUrls: ['./modal-ver-respuestas.component.scss']
})
export class ModalVerRespuestasComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
