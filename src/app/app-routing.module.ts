import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolicitudesComponent} from './modules/solicitudes/solicitudes.component';
import {SolicitudesNewComponent} from './modules/solicitudes/solicitudes-new/solicitudes-new.component';
import {SolicitudesNewReclamoComponent} from './modules/solicitudes/solicitudes-new-reclamo/solicitudes-new-reclamo.component';

const routes: Routes = [
  {path: '', redirectTo: '/solicitudes', pathMatch: 'full'},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'solicitudes/nuevo', component: SolicitudesNewComponent},
  {path: 'solicitudes/nuevo-reclamo/:solicitudOrigenID', component: SolicitudesNewReclamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
