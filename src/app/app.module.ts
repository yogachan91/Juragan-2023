import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { Device } from '@awesome-cordova-plugins/device/ngx';

// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
  }), 
  AppRoutingModule, 
  HttpClientModule,
],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,
    // StatusBar
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
