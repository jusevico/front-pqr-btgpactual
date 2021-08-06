import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolicitudesComponent} from './modules/solicitudes/solicitudes.component';
import {SolicitudesNewComponent} from './modules/solicitudes/solicitudes-new/solicitudes-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/solicitudes', pathMatch: 'full'},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'solicitudes/new', component: SolicitudesNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
