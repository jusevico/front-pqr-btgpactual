import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SolicitudesService} from '../solicitudes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../../../shared/auth';
import * as moment from 'moment';
import {TiposService} from '../../tipos/tipos.service';
import {ToastService} from '../../../shared/services/toast.service';

@Component({
  selector: 'app-solicitudes-new-reclamo',
  templateUrl: './solicitudes-new-reclamo.component.html',
  styleUrls: ['./solicitudes-new-reclamo.component.scss']
})
export class SolicitudesNewReclamoComponent implements OnInit {

  solicitudForm: FormGroup;
  tipos = [];
  solicitudOrigenID = null;
  solicitudOrigen = null;

  constructor(private activeRoute: ActivatedRoute,
              private solicitudService: SolicitudesService,
              private router: Router,
              private formBuilder: FormBuilder,
              private tipoService: TiposService,
              private toast: ToastService) {

    this.activeRoute.params.subscribe(params => {
      if (params.solicitudOrigenID !== undefined && params.solicitudOrigenID !== null) {
        this.solicitudOrigenID = params.solicitudOrigenID;
      }
    });

  }

  ngOnInit(): void {
    this.solicitudOrigen = this.getSolicitudOrigen(this.solicitudOrigenID);

    this.solicitudForm = this.formBuilder.group({
      titulo: [null, [Validators.required]],
      descripcion: [null, Validators.required],
      tipo: [null, Validators.required],
    });

    this.loadTipos();

  }

  async getSolicitudOrigen(solicitudOrigenID): Promise<void> {
    this.solicitudOrigen = await this.solicitudService.getByID(solicitudOrigenID);
  }

  async loadTipos(): Promise<void> {
    this.tipos = await this.tipoService.getAll();
  }

  getParams(): any {
    const cliente = Auth.getCliente();
    const tipo = this.solicitudForm.get('tipo').value;
    const fecha = moment(new Date()).format('YYYY-MM-DD');
    return {
      ...this.solicitudForm.value,
      tipoID: tipo._id,
      clienteID: cliente._id,
      cliente,
      fecha,
      solicitudOrigenID: this.solicitudOrigenID,
      solicitudOrigen: this.solicitudOrigen
    };
  }

  async submit(): Promise<void> {

    if (!this.solicitudForm.valid) {
      return;
    }

    const params = this.getParams();
    const result = await this.solicitudService.crear(params);
    if (result.status === 200) {
      this.toast.showSuccess(result.message);
      this.router.navigate(['/']);
    } else {
      this.toast.showError(result.message);
    }
  }

}
