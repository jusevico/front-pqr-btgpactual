import { Component, OnInit } from '@angular/core';
import {Auth} from '../../../shared/auth';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.scss']
})
export class InfoClienteComponent implements OnInit {

  cliente = null;

  constructor() { }

  ngOnInit(): void {
    this.cliente = Auth.getCliente();
  }

}
