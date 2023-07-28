import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPengirimanPageRoutingModule } from './map-pengiriman-routing.module';

import { MapPengirimanPage } from './map-pengiriman.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPengirimanPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [MapPengirimanPage]
})
export class MapPengirimanPageModule {}
