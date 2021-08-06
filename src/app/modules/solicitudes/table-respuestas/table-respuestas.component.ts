import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-respuestas',
  templateUrl: './table-respuestas.component.html',
  styleUrls: ['./table-respuestas.component.scss']
})
export class TableRespuestasComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
