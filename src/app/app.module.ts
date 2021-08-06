import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from './shared/services/api.service';
import {SolicitudesService} from './modules/solicitudes/solicitudes.service';
import {HttpClientModule} from '@angular/common/http';
import {SolicitudesModule} from './modules/solicitudes/solicitudes.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SolicitudesModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ApiService,
    SolicitudesService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
