import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TiposService} from '../../tipos/tipos.service';
import {Auth} from '../../../shared/auth';
import {SolicitudesService} from '../solicitudes.service';

@Component({
  selector: 'app-solicitudes-new',
  templateUrl: './solicitudes-new.component.html',
  styleUrls: ['./solicitudes-new.component.scss']
})
export class SolicitudesNewComponent implements OnInit {

  solicitudForm: FormGroup;
  tipos = [];

  constructor(
    private formBuilder: FormBuilder,
    private tipoService: TiposService,
    private solicitudService: SolicitudesService
  ) {
  }

  ngOnInit(): void {
    this.solicitudForm = this.formBuilder.group({
      titulo: [null, [Validators.required]],
      descripcion: [null, Validators.required],
      tipo: [null, Validators.required],
    });

    this.loadTipos();

  }

  async loadTipos(): Promise<void> {
    this.tipos = await this.tipoService.getAll();
  }

  getParams(): any {
    const cliente = Auth.getCliente();
    const tipo = this.solicitudForm.get('tipo').value;
    return {
      ...this.solicitudForm.value,
      tipoID: tipo._id,
      clienteID: cliente._id,
      cliente
    };
  }

  async submit(): Promise<void> {

    if (!this.solicitudForm.valid) {
      return;
    }

    const params = this.getParams();
    const result = await this.solicitudService.crear(params);
    console.log(result);
  }

}
