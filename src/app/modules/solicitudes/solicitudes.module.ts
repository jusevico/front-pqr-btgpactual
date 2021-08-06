import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { SolicitudesNewComponent } from './solicitudes-new/solicitudes-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { InfoClienteComponent } from './info-cliente/info-cliente.component';

@NgModule({
  declarations: [
    SolicitudesComponent,
    SolicitudesListComponent,
    SolicitudesNewComponent,
    InfoClienteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SolicitudesModule { }
