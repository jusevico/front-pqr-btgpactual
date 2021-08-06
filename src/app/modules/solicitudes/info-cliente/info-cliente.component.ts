import {Component, Input, OnInit} from '@angular/core';
import {Auth} from '../../../shared/auth';
import {ClientesService} from '../../clientes/clientes.service';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.scss']
})
export class InfoClienteComponent implements OnInit {

  @Input() clienteID;
  cliente = null;

  constructor(private clienteService: ClientesService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getCliente();
  }

  async getCliente(): Promise<void> {
    this.cliente = Auth.getCliente();
    if (!this.cliente) {
      this.cliente = await this.clienteService.getByID(this.clienteID);
      Auth.setCliente(this.cliente);
    }
  }

}
