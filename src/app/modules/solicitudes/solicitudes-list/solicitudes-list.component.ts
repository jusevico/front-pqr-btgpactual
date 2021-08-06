import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.scss']
})
export class SolicitudesListComponent implements OnInit {

  @Input() data = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
